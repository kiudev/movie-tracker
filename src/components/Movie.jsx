import PropTypes from 'prop-types'
import '../styles/movie.scss'

const Movie = ({
    data,
    selectedMovie,
    handleRowClick,
    handleBackdropClick,
}) => {
    return (
        <>
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
                            <div>
                                <p className="text-info">{data.release_date}</p>
                                <p className="text-info">{data.overview}</p>
                                <img
                                    className="backdrop-info"
                                    src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                                    alt={data.title}
                                />
                            </div>
                        </section>
                    </div>
                </section>
            )}
        </>
    )
}

export default Movie

Movie.propTypes = {
    data: PropTypes.object,
    selectedMovie: PropTypes.bool,
    handleRowClick: PropTypes.func,
    handleBackdropClick: PropTypes.func,
}
