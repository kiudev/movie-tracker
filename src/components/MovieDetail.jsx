import { useEffect, useState } from 'react'
import '../styles/movie.scss'

const MovieDetail = () => {

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

    return (
        <div>
            <h1>{movie.title}</h1>
            <h2>{movie.description}</h2>
        </div>
    )
}

export default MovieDetail