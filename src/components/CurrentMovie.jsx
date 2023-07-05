import { useState, useEffect } from 'react'
import '../styles/movie.scss'

const CurrentMovie = () => {
    const [movie, setMovie] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchMovies = async () => {
            const apiKey = '72201f7f034f07fc527ec840cbc0ebd6'
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
        }
        setTimeout(() => {
            setIsLoading(false)
        }, 200)
        fetchMovies()
    }, [])

    // Rows
    const currentFirstRow = movie.slice(0, 4)
    const currentSecondRow = movie.slice(5, 9)
    const currentThirdRow = movie.slice(10, 14)
    const currentFourthRow = movie.slice(15, 19)

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
                {currentFirstRow.map(data => (
                    <img
                        key={data.id}
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.title}
                    />
                ))}
            </section>
            <section>
                {currentSecondRow.map(data => (
                    <img
                        key={data.id}
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.title}
                    />
                ))}
            </section>
            <section>
                {currentThirdRow.map(data => (
                    <img
                        key={data.id}
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.title}
                    />
                ))}
            </section>
            <section>
                {currentFourthRow.map(data => (
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

export default CurrentMovie
