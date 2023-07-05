import { useState, useEffect } from 'react'
import '../styles/movie.scss'

const TopRatedMovie = () => {
    const [movie, setMovie] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchMovies = async () => {
            const apiKey = '72201f7f034f07fc527ec840cbc0ebd6'
            const pages = 'page=1'
            const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&${pages}`

            try {
                const response = await fetch(apiUrl)
                const data = await response.json()
                const movieData = data.results
                setMovie(movieData)
            } catch (error) {
                console.error(error)
            }
        }
        setTimeout(() => {
            setIsLoading(false)
        }, 200)
        fetchMovies()
    }, [])

    // Rows
    const ratedFirstRow = movie.slice(0, 4)
    const ratedSecondRow = movie.slice(5, 9)
    const ratedThirdRow = movie.slice(10, 14)
    const ratedFourthRow = movie.slice(15, 19)

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
            <section>
                {ratedFirstRow.map(data => (
                    <img
                        key={data.id}
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.title}
                    />
                ))}
            </section>
            <section>
                {ratedSecondRow.map(data => (
                    <img
                        key={data.id}
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.title}
                    />
                ))}
            </section>
            <section>
                {ratedThirdRow.map(data => (
                    <img
                        key={data.id}
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.title}
                    />
                ))}
            </section>
            <section>
                {ratedFourthRow.map(data => (
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

export default TopRatedMovie
