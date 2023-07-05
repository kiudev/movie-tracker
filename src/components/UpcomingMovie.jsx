import { useState, useEffect } from 'react'
import '../styles/movie.scss'

const UpcomingMovie = () => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const apiKey = '72201f7f034f07fc527ec840cbc0ebd6'
            const pages = ['page=1', 'page=2', 'page=3', 'page=4', 'page=5']
            const apiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&${pages[0]}`

            try {
                const response = await fetch(apiUrl)
                const data = await response.json()
                const movieData = data.results
                setMovie(movieData)
            } catch (error) {
                console.error(error)
            }
        }
        fetchMovies()
    }, [])

    // Rows
    const upcomingFirstRow = movie.slice(0, 4)
    const upcomingSecondRow = movie.slice(5, 9)
    const upcomingThirdRow = movie.slice(10, 14)
    const upcomingFourthRow = movie.slice(15, 19)

    return (
        <div>
            <section>
                {upcomingFirstRow.map(data => (
                    <img
                        key={data.id}
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.title}
                    />
                ))}
            </section>
            <section>
                {upcomingSecondRow.map(data => (
                    <img
                        key={data.id}
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.title}
                    />
                ))}
            </section>
            <section>
                {upcomingThirdRow.map(data => (
                    <img
                        key={data.id}
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.title}
                    />
                ))}
            </section>
            <section>
                {upcomingFourthRow.map(data => (
                    <img
                        key={data.id}
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.title}
                    />
                ))}
            </section>
        </div>
    )
}

export default UpcomingMovie
