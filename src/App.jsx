// React Router
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

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

    return (
        <Router>
            <div
                style={{
                    backgroundColor,
                    color: textColor,
                    position: 'absolute',
                    minHeight: '100%',
                    minWidth: '100%',
                    top: '0',
                    left: '0',
                    zIndex: '9'
                }}
            >
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">
                                    <span
                                        style={{
                                            backgroundColor: hoverPopular
                                                ? bgHover
                                                : '',
                                            color: hoverPopular
                                                ? backgroundColor
                                                : textColor,
                                            transition: 'all 0.2s ease-in-out',
                                            padding: '5px',
                                            borderRadius: '5px'
                                        }}
                                        className="value"
                                        onMouseEnter={handlePopularE}
                                        onMouseLeave={handlePopularL}
                                    >
                                        Popular
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/current">
                                    <span
                                        style={{
                                            backgroundColor: hoverCurrent
                                                ? bgHover
                                                : '',
                                            color: hoverCurrent
                                                ? backgroundColor
                                                : textColor,
                                            transition: 'all 0.2s ease-in-out',
                                            padding: '5px',
                                            borderRadius: '5px'
                                        }}
                                        className="value"
                                        onMouseEnter={handleCurrentE}
                                        onMouseLeave={handleCurrentL}
                                    >
                                        Current
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/top-rated">
                                    <span
                                        style={{
                                            backgroundColor: hoverRated
                                                ? bgHover
                                                : '',
                                            color: hoverRated
                                                ? backgroundColor
                                                : textColor,
                                            transition: 'all 0.2s ease-in-out',
                                            padding: '5px',
                                            borderRadius: '5px'
                                        }}
                                        className="value"
                                        onMouseEnter={handleRatedE}
                                        onMouseLeave={handleRatedL}
                                    >
                                        Top Rated
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/upcoming">
                                    <span
                                        style={{
                                            backgroundColor: hoverUpcoming
                                                ? bgHover
                                                : '',
                                            color: hoverUpcoming
                                                ? backgroundColor
                                                : textColor,
                                            transition: 'all 0.2s ease-in-out',
                                            padding: '5px',
                                            borderRadius: '5px'
                                        }}
                                        className="value"
                                        onMouseEnter={handleUpcomingE}
                                        onMouseLeave={handleUpcomingL}
                                    >
                                        Upcoming
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <ToggleSwitch click={changeTheme} />
                </header>
                <Routes>
                    <Route path="/" Component={Popular} />
                    <Route path="/current" Component={Current} />
                    <Route path="/top-rated" Component={TopRated} />
                    <Route path="/upcoming" Component={Upcoming} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
