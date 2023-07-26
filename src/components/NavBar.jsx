// Components
import ToggleSwitch from './ToggleSwitch'

// Hooks
import { useState } from 'react'

// React Router
import { NavLink } from 'react-router-dom'

// Prop Types
import PropTypes from 'prop-types'

const NavBar = ({
    bgHover,
    backgroundColor,
    textColor,
    changeTheme,
}) => {
    const [hoverPopular, setHoverPopular] = useState('')
    const [hoverCurrent, setHoverCurrent] = useState('')
    const [hoverRated, setHoverRated] = useState('')
    const [hoverUpcoming, setHoverUpcoming] = useState('')
    const [currentPage, setCurrentPage] = useState('')

    const handlePopularE = enter => {
        setHoverPopular(enter)
    }

    const handlePopularL = () => {
        setHoverPopular(null)
    }

    const handleCurrentE = enter => {
        setHoverCurrent(enter)
    }

    const handleCurrentL = () => {
        setHoverCurrent(null)
    }

    const handleRatedE = enter => {
        setHoverRated(enter)
    }

    const handleRatedL = () => {
        setHoverRated(null)
    }

    const handleUpcomingE = enter => {
        setHoverUpcoming(enter)
    }

    const handleUpcomingL = () => {
        setHoverUpcoming(null)
    }

    const handleItemClick = page => {
        setCurrentPage(page)
    }

    const scrollTopClick = () => {
        window.scrollTo({ top: 0 })
    }

    return (
        <>
            <nav>
                <div
                    className="arrow"
                    style={{
                        position: 'fixed',
                        right: 40,
                        padding: '5px',
                        height: '60px',
                        bottom: 80,
                        borderRadius: '10px',
                        transition: 'all 0.2s ease',
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="62"
                        height="62"
                        viewBox="0 0 48 48"
                        onClick={scrollTopClick}
                    >
                        <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="4"
                        >
                            <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                            <path
                                strokeLinecap="round"
                                d="M24 33.5v-18m9 9l-9-9l-9 9"
                            />
                        </g>
                    </svg>
                </div>
                <ul
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                    }}
                >
                    <li>
                        <NavLink to="/" activeclassname="active">
                            <span
                                style={{
                                    backgroundColor:
                                        currentPage === 'Popular'
                                            ? bgHover
                                            : hoverPopular
                                            ? bgHover
                                            : '',
                                    color:
                                        currentPage === 'Popular'
                                            ? backgroundColor
                                            : hoverPopular
                                            ? backgroundColor
                                            : textColor,
                                    transition: 'all 0.2s ease-in-out',
                                    padding: '5px',
                                    borderRadius: '5px',
                                }}
                                className="value"
                                onMouseEnter={handlePopularE}
                                onMouseLeave={handlePopularL}
                                onClick={() => handleItemClick('Popular')}
                            >
                                Popular
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/current" activeclassname="active">
                            <span
                                style={{
                                    backgroundColor:
                                        currentPage === 'Current'
                                            ? bgHover
                                            : hoverCurrent
                                            ? bgHover
                                            : '',
                                    color:
                                        currentPage === 'Current'
                                            ? backgroundColor
                                            : hoverCurrent
                                            ? backgroundColor
                                            : textColor,
                                    transition: 'all 0.2s ease-in-out',
                                    padding: '5px',
                                    borderRadius: '5px',
                                }}
                                className="value"
                                onMouseEnter={handleCurrentE}
                                onMouseLeave={handleCurrentL}
                                onClick={() => handleItemClick('Current')}
                            >
                                Current
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/top-rated">
                            <span
                                style={{
                                    backgroundColor:
                                        currentPage === 'Top Rated'
                                            ? bgHover
                                            : hoverRated
                                            ? bgHover
                                            : '',
                                    color:
                                        currentPage === 'Top Rated'
                                            ? backgroundColor
                                            : hoverRated
                                            ? backgroundColor
                                            : textColor,
                                    transition: 'all 0.2s ease-in-out',
                                    padding: '5px',
                                    borderRadius: '5px',
                                }}
                                className="value"
                                onMouseEnter={handleRatedE}
                                onMouseLeave={handleRatedL}
                                onClick={() => handleItemClick('Top Rated')}
                            >
                                Top Rated
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/upcoming">
                            <span
                                style={{
                                    backgroundColor:
                                        currentPage === 'Upcoming'
                                            ? bgHover
                                            : hoverUpcoming
                                            ? bgHover
                                            : '',
                                    color:
                                        currentPage === 'Upcoming'
                                            ? backgroundColor
                                            : hoverUpcoming
                                            ? backgroundColor
                                            : textColor,
                                    transition: 'all 0.2s ease-in-out',
                                    padding: '5px',
                                    borderRadius: '5px',
                                }}
                                className="value"
                                onMouseEnter={handleUpcomingE}
                                onMouseLeave={handleUpcomingL}
                                onClick={() => handleItemClick('Upcoming')}
                            >
                                Upcoming
                            </span>
                        </NavLink>
                    </li>
                    <ToggleSwitch click={changeTheme} />
                </ul>
            </nav>
        </>
    )
}

export default NavBar

NavBar.propTypes = {
    bgHover: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    changeTheme: PropTypes.func,
}
