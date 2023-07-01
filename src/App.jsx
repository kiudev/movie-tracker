import { useState, useEffect } from 'react'
import './App.css'
import ToggleSwitch from './components/ToggleSwitch'
import Tracker from './components/Tracker'

function App() {
    const light = '#EEEEEE'
    const dark = '#181818'

    const [isLightMode, setIsLightMode] = useState(false)

    const changeTheme = () => {
        setIsLightMode(!isLightMode)
    }

    const backgroundColor = isLightMode ? light : dark
    const textColor = isLightMode ? dark : light
    const borderColor = isLightMode ? dark : light

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(
            'https://api.themoviedb.org/3/movie/550?api_key=72201f7f034f07fc527ec840cbc0ebd6'
        )
            .then(response => response.json())
            .then(dog => {
                setIsLoading(false)
            })
    }, [])

    if (isLoading) {
        return (
            <main style={{ backgroundColor, color: textColor }}>
                <header>
                    <ToggleSwitch click={changeTheme} />
                    <Tracker
                        style={{
                            backgroundColor,
                            borderColor,
                            color: textColor,
                        }}
                    />
                </header>
                <section>
                    <h1>Loading...</h1>
                </section>
            </main>
        )
    }

    return (
        <main style={{ backgroundColor, color: textColor }}>
            <header>
                <ToggleSwitch click={changeTheme} />
                <Tracker
                    style={{ backgroundColor, borderColor, color: textColor }}
                />
            </header>
        </main>
    )
}

export default App
