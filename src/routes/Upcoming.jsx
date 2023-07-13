import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Movie from '../components/Movie'
import '../styles/movie.scss'

const Upcoming = () => {
    const [movie, setMovie] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedMovie, setSelectedMovie] = useState(false)

    useEffect(() => {
        const fetchMovies = async () => {
            const apiKey = '72201f7f034f07fc527ec840cbc0ebd6'
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
        fetchMovies()
    }, [])

    // Rows
    const upcomingFirstRow = movie.slice(0, 4)
    const upcomingSecondRow = movie.slice(4, 8)
    const upcomingThirdRow = movie.slice(8, 12)
    const upcomingFourthRow = movie.slice(12, 16)
    const upcomingFifthRow = movie.slice(16, 20)

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
                    {upcomingFirstRow.map(data => (
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
                    {upcomingSecondRow.map(data => (
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
                    {upcomingThirdRow.map(data => (
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
                    {upcomingFourthRow.map(data => (
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
                    {upcomingFifthRow.map(data => (
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

export default Upcoming
