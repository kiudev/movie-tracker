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
    const ratedSecondRow = movie.slice(4, 8)
    const ratedThirdRow = movie.slice(8, 12)
    const ratedFourthRow = movie.slice(12, 16)
    const ratedFifthRow = movie.slice(16, 20)

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
                    <div key={data.id}>
                        <div className="info">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="3em"
                                height="3em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M12 16.667L5 22l3-8l-6-4.5h7.5L12 2l2.5 7.5H22L16 14l3 8z"
                                ></path>
                            </svg>
                            <p className="vote">{`${data.vote_average} (${data.vote_count})`}</p>
                        </div>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                            alt={data.title}
                        />
                    </div>
                ))}
            </section>
            <section>
                {ratedSecondRow.map(data => (
                    <div key={data.id}>
                        <div className="info">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="3em"
                                height="3em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M12 16.667L5 22l3-8l-6-4.5h7.5L12 2l2.5 7.5H22L16 14l3 8z"
                                ></path>
                            </svg>
                            <p className="vote">{`${data.vote_average} (${data.vote_count})`}</p>
                        </div>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                            alt={data.title}
                        />
                    </div>
                ))}
            </section>
            <section>
                {ratedThirdRow.map(data => (
                    <div key={data.id}>
                        <div className="info">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="3em"
                                height="3em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M12 16.667L5 22l3-8l-6-4.5h7.5L12 2l2.5 7.5H22L16 14l3 8z"
                                ></path>
                            </svg>
                            <p className="vote">{`${data.vote_average} (${data.vote_count})`}</p>
                        </div>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                            alt={data.title}
                        />
                    </div>
                ))}
            </section>
            <section>
                {ratedFourthRow.map(data => (
                    <div key={data.id}>
                        <div className="info">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="3em"
                                height="3em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M12 16.667L5 22l3-8l-6-4.5h7.5L12 2l2.5 7.5H22L16 14l3 8z"
                                ></path>
                            </svg>
                            <p className="vote">{`${data.vote_average} (${data.vote_count})`}</p>
                        </div>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                            alt={data.title}
                        />
                    </div>
                ))}
            </section>
            <section>
                {ratedFifthRow.map(data => (
                    <div key={data.id}>
                        <div className="info">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="3em"
                                height="3em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M12 16.667L5 22l3-8l-6-4.5h7.5L12 2l2.5 7.5H22L16 14l3 8z"
                                ></path>
                            </svg>
                            <p className="vote">{`${data.vote_average} (${data.vote_count})`}</p>
                        </div>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                            alt={data.title}
                        />
                    </div>
                ))}
            </section>
        </div>
    )
}

export default TopRatedMovie
