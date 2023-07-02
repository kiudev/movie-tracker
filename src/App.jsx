import { useState } from 'react'
import ToggleSwitch from './components/ToggleSwitch'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Movies from './pages/Movies'
import './App.css'

function App() {
    const light = '#EEEEEE'
    const dark = '#181818'

    const [isLightMode, setIsLightMode] = useState(false)

    const changeTheme = () => {
        setIsLightMode(!isLightMode)
    }

    const backgroundColor = isLightMode ? light : dark
    const textColor = isLightMode ? dark : light
    // const borderColor = isLightMode ? dark : light

    const linkStyles = {
        backgroundColor,
        textColor,
    }

    return (
        <BrowserRouter>
            <main style={{ backgroundColor, color: textColor }}>
                <header>
                    <ToggleSwitch click={changeTheme} />
                </header>
                <section>
                    <ul>
                        <li>
                            <Link to="./pages/Movies.jsx" style={linkStyles}>
                                Movies
                            </Link>
                        </li>
                        <li>
                            <Link to="#">Series</Link>
                        </li>
                    </ul>
                </section>
            </main>
        </BrowserRouter>
    )
}

export default App
