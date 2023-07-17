import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Movie from '../components/Movie'
import '../styles/movie.scss'

const Current = () => {
    const [movie, setMovie] = useState([])
    const [character, setCharacter] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedMovie, setSelectedMovie] = useState(false)

    const apiKey = '72201f7f034f07fc527ec840cbc0ebd6'

    useEffect(() => {
        const fetchCurrentMovies = async () => {
            const pages = 'page=1'
            const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&${pages}`

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
        fetchCurrentMovies()
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

    // Rows
    const currentFirstRow = movie.slice(0, 4)
    const currentSecondRow = movie.slice(4, 8)
    const currentThirdRow = movie.slice(8, 12)
    const currentFourthRow = movie.slice(12, 16)
    const currentFifthRow = movie.slice(16, 20)

    const handleMovieClick = movie => {
        setSelectedMovie(movie)
        fetchMovieDetails(movie)
    }

    const handleBackdropClick = backdrop => {
        setSelectedMovie(!backdrop)
    }

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
                    ease: [0, 0.71, 0.2, 1]
                  }}
            >
                <section>
                    {currentFirstRow.map(data => (
                        <div key={data.id}>
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
                <section>
                    {currentSecondRow.map(data => (
                        <div key={data.id}>
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
                <section>
                    {currentThirdRow.map(data => (
                        <div key={data.id}>
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
                <section>
                    {currentFourthRow.map(data => (
                        <div key={data.id}>
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
                <section className='last-row'>
                    {currentFifthRow.map(data => (
                        <div key={data.id}>
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

export default Current
