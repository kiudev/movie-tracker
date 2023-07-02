import { useState, useEffect } from 'react'

export const Movie = () => {
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
            <h1>Movies</h1>
            <ul>
                {movie.map(data => (
                    <li key={data.id}>{data.original_title}</li>
                ))}
            </ul>
        </div>
    )
}
