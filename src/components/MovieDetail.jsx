import { useEffect, useState } from 'react'
import '../styles/movie.scss'

const MovieDetail = () => {
    const [movie, setMovie] = useState([])
    const [isLoading, setIsLoading] = useState(true)

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
                setIsLoading(false)
                console.error(error)
            }
        }
        setTimeout(() => {
            setIsLoading(false)
        }, 200)
        fetchMovies()
    }, [])

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
        <div>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie[0].title}
            />
            <h1>{movie.title}</h1>
            <h2>{movie.description}</h2>
        </div>
    )
}

export default MovieDetail
