// React Router
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

// Routes
import Popular from './routes/Popular'
import Current from './routes/Current'

// Components
import ToggleSwitch from './components/ToggleSwitch'

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

    const backgroundColor = isLightMode ? light : dark
    const textColor = isLightMode ? dark : light

    const [hoverPopular, setHoverPopular] = useState('')
    const [hoverCurrent, setHoverCurrent] = useState('')

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

    return (
        <Router>
            <div style={{ backgroundColor, color: textColor }}>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/popular">
                                    <span
                                        style={{
                                            color: hoverPopular
                                                ? textColor
                                                : '',
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
                                            color: hoverCurrent
                                                ? textColor
                                                : '',
                                        }}
                                        className="value"
                                        onMouseEnter={handleCurrentE}
                                        onMouseLeave={handleCurrentL}
                                    >
                                        Current
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <ToggleSwitch click={changeTheme} />
                </header>
                <Routes>
                    <Route path="/popular" Component={Popular} />
                    <Route path="/current" Component={Current} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
