// Animations
import { motion } from 'framer-motion'

// Prop Types
import PropTypes from 'prop-types'

// Styles
import '../styles/movie.scss'
import 'react-tooltip/dist/react-tooltip.css'

// Tooltip
import { Tooltip } from 'react-tooltip'

const Movie = ({
    data,
    selectedMovie,
    handleMovieClick,
    handleBackdropClick,
    character,
}) => {
    const characters = character.slice(0, 12)

    const container = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.5,
                ease: [0, 0.71, 0.2, 1],
            },
        },
    }

    const charactersInfo = {
        hidden: { opacity: 0, scale: 1, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    }

    return (
        <>
            <div className="info">
                <div className="vote-container"></div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="#eeeeee"
                        fillRule="evenodd"
                        d="M12 16.667L5 22l3-8l-6-4.5h7.5L12 2l2.5 7.5H22L16 14l3 8z"
                    ></path>
                </svg>
                <p className="vote">{`${data.vote_average}`}</p>
                <p className="vote">{`(${data.vote_count})`}</p>
            </div>
            <img
                data-tooltip-id="my-tooltip"
                data-tooltip-content={data.title}
                data-tooltip-place="bottom"
                className="poster"
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
                onClick={() => handleMovieClick(data.id)}
            />
            <Tooltip id='my-tooltip'/>
            {selectedMovie === data.id && (
                <section
                    style={{
                        display: selectedMovie ? 'visible' : 'none',
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
                            fill="#eeeeee"
                            d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                        />
                    </svg>
                    <div className="movie-info">
                        <header>
                            <h2>{data.title}</h2>
                        </header>
                        <section>
                            <div>
                                <p className="text-info">{data.release_date}</p>
                                <p className="text-info">{data.overview}</p>
                                <img
                                    className="poster-info"
                                    src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                                    alt={data.name}
                                />
                            </div>
                            <motion.ul
                                className="characters"
                                variants={container}
                                initial="hidden"
                                animate="visible"
                            >
                                {characters.map(data => (
                                    <motion.li
                                        key={data}
                                        className="characters-info"
                                        variants={charactersInfo}
                                    >
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
                                    </motion.li>
                                ))}
                            </motion.ul>
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
    character: PropTypes.array,
    selectedMovie: PropTypes.bool,
    handleMovieClick: PropTypes.func,
    handleBackdropClick: PropTypes.func,
}
