// Hooks
import { useState, useEffect } from 'react'

import { motion } from 'framer-motion'

// Components
import Movie from '../components/Movie'

// Styles
import '../styles/movie.scss'

const Popular = () => {
    const [movie, setMovie] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedMovie, setSelectedMovie] = useState(false)

    useEffect(() => {
        const fetchMovies = async () => {
            const apiKey = '72201f7f034f07fc527ec840cbc0ebd6'
            const pages = 'page=1'
            const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&${pages}`

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
        fetchMovies()
    }, [])

    // Rows
    const popularFirstRow = movie.slice(0, 4)
    const popularSecondRow = movie.slice(4, 8)
    const popularThirdRow = movie.slice(8, 12)
    const popularFourthRow = movie.slice(12, 16)
    const popularFifthRow = movie.slice(16, 20)

    const handleRowClick = movie => {
        setSelectedMovie(movie)
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
                    ease: [0, 0.71, 0.2, 1],
                }}
            >
                <section>
                    {popularFirstRow.map(data => (
                        <div key={data.id}>
                            <Movie
                                data={data}
                                selectedMovie={selectedMovie}
                                handleRowClick={handleRowClick}
                                handleBackdropClick={handleBackdropClick}
                            />
                        </div>
                    ))}
                </section>
                <section>
                    {popularSecondRow.map(data => (
                        <div key={data.id}>
                            <Movie
                                data={data}
                                selectedMovie={selectedMovie}
                                handleRowClick={handleRowClick}
                                handleBackdropClick={handleBackdropClick}
                            />
                        </div>
                    ))}
                </section>
                <section>
                    {popularThirdRow.map(data => (
                        <div key={data.id}>
                            <Movie
                                data={data}
                                selectedMovie={selectedMovie}
                                handleRowClick={handleRowClick}
                                handleBackdropClick={handleBackdropClick}
                            />
                        </div>
                    ))}
                </section>
                <section>
                    {popularFourthRow.map(data => (
                        <div key={data.id}>
                            <Movie
                                data={data}
                                selectedMovie={selectedMovie}
                                handleRowClick={handleRowClick}
                                handleBackdropClick={handleBackdropClick}
                            />
                        </div>
                    ))}
                </section>
                <section>
                    {popularFifthRow.map(data => (
                        <div key={data.id}>
                            <Movie
                                data={data}
                                selectedMovie={selectedMovie}
                                handleRowClick={handleRowClick}
                                handleBackdropClick={handleBackdropClick}
                            />
                        </div>
                    ))}
                </section>
            </motion.div>
        </>
    )
}

export default Popular
