import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../styles/movie.scss'

const PopularMovie = ({ onMovieClick }) => {
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

    // Rows
    const popularFirstRow = movie.slice(0, 4)
    const popularSecondRow = movie.slice(4, 8)
    const popularThirdRow = movie.slice(8, 12)
    const popularFourthRow = movie.slice(12, 16)
    const popularFifthRow = movie.slice(16, 20)

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
                {popularFirstRow.map(data => (
                    <div key={data.id} onClick={() => onMovieClick(movie)}>
                        <div className='info'>
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
                            <p className='vote'>{`${data.vote_average} (${data.vote_count})`}</p>
                        </div>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                            alt={data.title}
                        />
                        <p className='popularity'>Popularity: {data.popularity}</p>
                    </div>
                ))}
            </section>
            <section>
                {popularSecondRow.map(data => (
                    <div key={data.id} onClick={() => onMovieClick(movie)}>
                        <div className='info'>
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
                            <p className='vote'>{`${data.vote_average} (${data.vote_count})`}</p>
                        </div>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                            alt={data.title}
                        />
                        <p className='popularity'>Popularity: {data.popularity}</p>
                    </div>
                ))}
            </section>
            <section>
                {popularThirdRow.map(data => (
                    <div key={data.id} onClick={() => onMovieClick(movie)}>
                        <div className='info'>
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
                            <p className='vote'>{`${data.vote_average} (${data.vote_count})`}</p>
                        </div>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                            alt={data.title}
                        />
                        <p className='popularity'>Popularity: {data.popularity}</p>
                    </div>
                ))}
            </section>
            <section>
                {popularFourthRow.map(data => (
                    <div key={data.id} onClick={() => onMovieClick(movie)}>
                        <div className='info'>
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
                            <p className='vote'>{`${data.vote_average} (${data.vote_count})`}</p>
                        </div>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                            alt={data.title}
                        />
                        <p className='popularity'>Popularity: {data.popularity}</p>
                    </div>
                ))}
            </section>
            <section>
                {popularFifthRow.map(data => (
                    <div key={data.id} onClick={() => onMovieClick(movie)}>
                        <div className='info'>
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
                            <p className='vote'>{`${data.vote_average} (${data.vote_count})`}</p>
                        </div>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                            alt={data.title}
                        />
                        <p className='popularity'>Popularity: {data.popularity}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}

PopularMovie.propTypes = {
    onMovieClick: PropTypes.func,
}

export default PopularMovie
