// React Router
import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom'

// Routes
import Popular from './routes/Popular'
import Current from './routes/Current'
import TopRated from './routes/TopRated'
import Upcoming from './routes/Upcoming'

// Components
import ToggleSwitch from './components/ToggleSwitch'
import Footer from './components/Footer'

// Hooks
import { useState } from 'react'

// Styles
import './App.css'

function App() {
    const light = '#EEEEEE'
    const dark = '#181818'
    // const lightBlue = '#348ca2'

    const [isLightMode, setIsLightMode] = useState(false)

    const changeTheme = () => {
        setIsLightMode(!isLightMode)
    }

    // * Hover State
    const [hoverPopular, setHoverPopular] = useState('')
    const [hoverCurrent, setHoverCurrent] = useState('')
    const [hoverRated, setHoverRated] = useState('')
    const [hoverUpcoming, setHoverUpcoming] = useState('')

    // Popular
    const handlePopularE = enter => {
        setHoverPopular(enter)
    }

    const handlePopularL = () => {
        setHoverPopular(null)
    }
    // Current
    const handleCurrentE = enter => {
        setHoverCurrent(enter)
    }

    const handleCurrentL = () => {
        setHoverCurrent(null)
    }

    // Top Rated
    const handleRatedE = enter => {
        setHoverRated(enter)
    }

    const handleRatedL = () => {
        setHoverRated(null)
    }

    // Upcoming
    const handleUpcomingE = enter => {
        setHoverUpcoming(enter)
    }

    const handleUpcomingL = () => {
        setHoverUpcoming(null)
    }

    const backgroundColor = isLightMode ? light : dark
    const textColor = isLightMode ? dark : light
    const bgHover = isLightMode ? dark : light

    const [currentPage, setCurrentPage] = useState('')

    const handleItemClick = page => {
        setCurrentPage(page)
    }

    const scrollTopClick = () => {
        window.scrollTo({ top: 0 })
    }

    return (
        <BrowserRouter>
            <div
                style={{
                    backgroundColor,
                    color: textColor,
                    position: 'absolute',
                    minHeight: '100%',
                    minWidth: '100%',
                    top: '0',
                    left: '0',
                    zIndex: '9',
                }}
            >
                <header>
                    <nav>
                        <div
                            className="arrow"
                            style={{
                                position: 'fixed',
                                right: 50,
                                padding: '5px',
                                height: '73px',
                                bottom: 20,
                                borderRadius: '10px',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="72"
                                height="72"
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
                        <ul>
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
                                        onClick={() =>
                                            handleItemClick('Popular')
                                        }
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
                                        onClick={() =>
                                            handleItemClick('Current')
                                        }
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
                                        onClick={() =>
                                            handleItemClick('Top Rated')
                                        }
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
                                        onClick={() =>
                                            handleItemClick('Upcoming')
                                        }
                                    >
                                        Upcoming
                                    </span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <ToggleSwitch click={changeTheme} />
                </header>
                <Routes>
                    <Route exact path="/" Component={Popular} />
                    <Route path="/current" Component={Current} />
                    <Route path="/top-rated" Component={TopRated} />
                    <Route path="/upcoming" Component={Upcoming} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
