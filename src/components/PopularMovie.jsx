import { useState, useEffect } from 'react'
import '../styles/movie.scss'

const PopularMovie = () => {
    const [movie, setMovie] = useState([])

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
        }
        fetchMovies()
    }, [])

    // Rows
    const popularFirstRow = movie.slice(0, 4)
    const popularSecondRow = movie.slice(5, 9)
    const popularThirdRow = movie.slice(10, 14)
    const popularFourthRow = movie.slice(15, 19)

    return (
        <div>
            <section>
                {popularFirstRow.map(data => (
                    <img
                        key={data.id}
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.title}
                    />
                ))}
            </section>
            <section>
                {popularSecondRow.map(data => (
                    <img
                        key={data.id}
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.title}
                    />
                ))}
            </section>
            <section>
                {popularThirdRow.map(data => (
                    <img
                        key={data.id}
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.title}
                    />
                ))}
            </section>
            <section>
                {popularFourthRow.map(data => (
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

export default PopularMovie
