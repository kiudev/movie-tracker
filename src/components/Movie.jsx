import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import '../styles/movie.scss'

const Movie = ({
    data,
    selectedMovie,
    handleMovieClick,
    handleBackdropClick,
    character,
}) => {
    const characters = character.slice(0, 10)

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
                onClick={() => handleMovieClick(data.id)}
            />
            {selectedMovie === data.id && (
                <motion.div
                    initial={{ opacity: 0, scale: 0, position: 'absolute' }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: [0, 0.71, 0.5, 1.01],
                    }}
                >
                    <section
                        style={{
                            display: selectedMovie ? 'block' : 'none',
                        }}
                        className="backdrop"
                    >
                        <svg
                            className="close"
                            xmlns="http://www.w3.org/2000/svg"
                            width="52"
                            height="52"
                            viewBox="0 0 24 24"
                            onClick={handleBackdropClick}
                        >
                            <path
                                fill="currentColor"
                                d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                            />
                        </svg>
                        <div className="movie-info">
                            <header>
                                <h2>{data.title}</h2>
                            </header>
                            <section>
                                <div>
                                    <p className="text-info">
                                        {data.release_date}
                                    </p>
                                    <p className="text-info">{data.overview}</p>
                                    <img
                                        className="poster-info"
                                        src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                                        alt={data.name}
                                    />
                                </div>
                                {characters.map(data => (
                                    <div key={data.id} className="characters">
                                        <img
                                            className="profile"
                                            src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
                                            alt={data.name}
                                        />
                                        <aside>
                                            <p className="name">{data.name}</p>
                                            <p className="character-name">
                                                {data.character}
                                            </p>
                                        </aside>
                                    </div>
                                ))}
                            </section>
                        </div>
                    </section>
                </motion.div>
            )}
        </>
    )
}

export default Movie

Movie.propTypes = {
    data: PropTypes.object,
    character: PropTypes.array,
    selectedMovie: PropTypes.bool,
    handleMovieClick: PropTypes.func,
    handleBackdropClick: PropTypes.func,
}
