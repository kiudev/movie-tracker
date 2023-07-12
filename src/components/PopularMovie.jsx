import { useState, useEffect } from 'react'
import '../styles/movie.scss'

const PopularMovie = () => {
    const [movie, setMovie] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedMovie, setSelectedMovie] = useState(false)

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
        }, 0)
        fetchMovies()
    }, [])

    // Rows
    const popularFirstRow = movie.slice(0, 4)
    const popularSecondRow = movie.slice(4, 8)
    const popularThirdRow = movie.slice(8, 12)
    const popularFourthRow = movie.slice(12, 16)
    const popularFifthRow = movie.slice(16, 20)

    const handleRowClick = movie => {
        setSelectedMovie(movie)
    }

    const handleBackdropClick = backdrop => {
        setSelectedMovie(!backdrop)
    }

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
                            className="poster"
                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                            alt={data.title}
                            onClick={() => handleRowClick(data.id)}
                        />
                        <p className="popularity">
                            Popularity: {data.popularity}
                        </p>
                        {selectedMovie === data.id && (
                            <section
                                style={{
                                    display: selectedMovie ? 'block' : 'none',
                                }}
                                className="backdrop"
                                onClick={handleBackdropClick}
                            >
                                <div className="movie-info">
                                    <header>
                                        <h2>{data.title}</h2>
                                    </header>
                                    <section>
                                        <div style={{ display: 'block' }}>
                                            <img
                                                className="poster-info"
                                                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                                                alt={data.title}
                                            />
                                            <p className="text-info">
                                                {data.release_date}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-info">
                                                {data.overview}
                                            </p>
                                            <img
                                                className="backdrop-info"
                                                src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                                                alt={data.title}
                                            />
                                        </div>
                                        <div>
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
                                            <p
                                                style={{
                                                    fontSize: '20px',
                                                    marginTop: '-5px',
                                                }}
                                            >{`${data.vote_average} (${data.vote_count})`}</p>
                                        </div>
                                    </section>
                                </div>
                            </section>
                        )}
                    </div>
                ))}
            </section>
            <section>
                {popularSecondRow.map(data => (
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
                            className="poster"
                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                            alt={data.title}
                            onClick={() => handleRowClick(data.id)}
                        />
                        <p className="popularity">
                            Popularity: {data.popularity}
                        </p>
                        {selectedMovie === data.id && (
                            <section
                                style={{
                                    display: selectedMovie ? 'block' : 'none',
                                }}
                                className="backdrop"
                                onClick={handleBackdropClick}
                            >
                                <div className="movie-info">
                                    <header>
                                        <h2>{data.title}</h2>
                                    </header>
                                    <section>
                                        <div style={{ display: 'block' }}>
                                            <img
                                                className="poster-info"
                                                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                                                alt={data.title}
                                            />
                                            <p className="text-info">
                                                {data.release_date}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-info">
                                                {data.overview}
                                            </p>
                                            <img
                                                className="backdrop-info"
                                                src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                                                alt={data.title}
                                            />
                                        </div>
                                        <div>
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
                                            <p
                                                style={{
                                                    fontSize: '20px',
                                                    marginTop: '-5px',
                                                }}
                                            >{`${data.vote_average} (${data.vote_count})`}</p>
                                        </div>
                                    </section>
                                </div>
                            </section>
                        )}
                    </div>
                ))}
            </section>
            <section>
                {popularThirdRow.map(data => (
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
                            className="poster"
                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                            alt={data.title}
                            onClick={() => handleRowClick(data.id)}
                        />
                        <p className="popularity">
                            Popularity: {data.popularity}
                        </p>
                        {selectedMovie === data.id && (
                            <section
                                style={{
                                    display: selectedMovie ? 'block' : 'none',
                                }}
                                className="backdrop"
                                onClick={handleBackdropClick}
                            >
                                <div className="movie-info">
                                    <header>
                                        <h2>{data.title}</h2>
                                    </header>
                                    <section>
                                        <div style={{ display: 'block' }}>
                                            <img
                                                className="poster-info"
                                                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                                                alt={data.title}
                                            />
                                            <p className="text-info">
                                                {data.release_date}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-info">
                                                {data.overview}
                                            </p>
                                            <img
                                                className="backdrop-info"
                                                src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                                                alt={data.title}
                                            />
                                        </div>
                                        <div>
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
                                            <p
                                                style={{
                                                    fontSize: '20px',
                                                    marginTop: '-5px',
                                                }}
                                            >{`${data.vote_average} (${data.vote_count})`}</p>
                                        </div>
                                    </section>
                                </div>
                            </section>
                        )}
                    </div>
                ))}
            </section>
            <section>
                {popularFourthRow.map(data => (
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
                            className="poster"
                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                            alt={data.title}
                            onClick={() => handleRowClick(data.id)}
                        />
                        <p className="popularity">
                            Popularity: {data.popularity}
                        </p>
                        {selectedMovie === data.id && (
                            <section
                                style={{
                                    display: selectedMovie ? 'block' : 'none',
                                }}
                                className="backdrop"
                                onClick={handleBackdropClick}
                            >
                                <div className="movie-info">
                                    <header>
                                        <h2>{data.title}</h2>
                                    </header>
                                    <section>
                                        <div style={{ display: 'block' }}>
                                            <img
                                                className="poster-info"
                                                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                                                alt={data.title}
                                            />
                                            <p className="text-info">
                                                {data.release_date}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-info">
                                                {data.overview}
                                            </p>
                                            <img
                                                className="backdrop-info"
                                                src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                                                alt={data.title}
                                            />
                                        </div>
                                        <div>
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
                                            <p
                                                style={{
                                                    fontSize: '20px',
                                                    marginTop: '-5px',
                                                }}
                                            >{`${data.vote_average} (${data.vote_count})`}</p>
                                        </div>
                                    </section>
                                </div>
                            </section>
                        )}
                    </div>
                ))}
            </section>
            <section>
                {popularFifthRow.map(data => (
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
                            className="poster"
                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                            alt={data.title}
                            onClick={() => handleRowClick(data.id)}
                        />
                        <p className="popularity">
                            Popularity: {data.popularity}
                        </p>
                        {selectedMovie === data.id && (
                            <section
                                style={{
                                    display: selectedMovie ? 'block' : 'none',
                                }}
                                className="backdrop"
                                onClick={handleBackdropClick}
                            >
                                <div className="movie-info">
                                    <header>
                                        <h2>{data.title}</h2>
                                    </header>
                                    <section>
                                        <div style={{ display: 'block' }}>
                                            <img
                                                className="poster-info"
                                                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                                                alt={data.title}
                                            />
                                            <p className="text-info">
                                                {data.release_date}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-info">
                                                {data.overview}
                                            </p>
                                            <img
                                                className="backdrop-info"
                                                src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                                                alt={data.title}
                                            />
                                        </div>
                                        <div>
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
                                            <p
                                                style={{
                                                    fontSize: '20px',
                                                    marginTop: '-5px',
                                                }}
                                            >{`${data.vote_average} (${data.vote_count})`}</p>
                                        </div>
                                    </section>
                                </div>
                            </section>
                        )}
                    </div>
                ))}
            </section>
        </div>
    )
}

export default PopularMovie
