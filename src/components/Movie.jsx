import { useState, useEffect } from 'react'
import '../styles/movie.scss'

const Movie = () => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const apiKey = '72201f7f034f07fc527ec840cbc0ebd6'
            const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`

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

    return (
        <div>
            <section>
                {movie.map(data => (
                    <img
                        key={data.id}
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.title}
                    />
                ))}
                {/* {movie.map(data => (
                    <li key={data.id}>{data.title}</li>
                ))} */}
            </section>
        </div>
    )
}

export default Movie
