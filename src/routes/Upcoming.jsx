// Hooks
import { useState, useEffect } from 'react'

// Animations
import { motion } from 'framer-motion'

// Components
import Movie from '../components/Movie'

// Styles
import '../styles/movie.scss'

// API Key
import { Key as apiKey } from '../key'

const Upcoming = () => {
    const [movie, setMovie] = useState([])
    const [character, setCharacter] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedMovie, setSelectedMovie] = useState(false)

    useEffect(() => {
        const fetchUpcomingMovies = async () => {
            const pages = 'page=1'
            const apiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&${pages}`

            try {
                const response = await fetch(apiUrl)
                const data = await response.json()
                const movieData = data.results
                setMovie(movieData)
            } catch (error) {
                console.error(error)
            }
            setIsLoading(false)
        }
        fetchUpcomingMovies()
    }, [])

    const fetchMovieDetails = async movie => {
        const apiMovie = `https://api.themoviedb.org/3/movie/${movie}/credits?api_key=${apiKey}`

        try {
            const response = await fetch(apiMovie)
            const data = await response.json()
            const characterData = data.cast
            setCharacter(characterData)
        } catch (error) {
            console.log(error)
        }
    }

    const handleMovieClick = movie => {
        setSelectedMovie(movie)
        fetchMovieDetails(movie)
    }

    const handleBackdropClick = backdrop => {
        setSelectedMovie(!backdrop)
    }

    const upcomingMovies = movie.slice(0, 20)

    if (isLoading) {
        return (
            <div>
                <div className="loader-wrapper">
                    <div className="loader"></div>
                </div>
            </div>
        )
    }
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 2,
                    ease: [0, 0.71, 0.2, 1],
                }}
            >
                <section className="movies">
                    {upcomingMovies.map(data => (
                        <div key={data.id} className="row">
                            <Movie
                                data={data}
                                selectedMovie={selectedMovie}
                                handleMovieClick={handleMovieClick}
                                handleBackdropClick={handleBackdropClick}
                                character={character}
                            />
                        </div>
                    ))}
                </section>
            </motion.div>
        </>
    )
}

export default Upcoming