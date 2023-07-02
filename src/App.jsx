import { useState } from 'react'
import ToggleSwitch from './components/ToggleSwitch'
import Tracker from './components/Tracker'
import { Movie } from './components/Movie'
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
    const borderColor = isLightMode ? dark : light

    return (
        <main style={{ backgroundColor, color: textColor }}>
            <header>
                <ToggleSwitch click={changeTheme} />
                <Tracker
                    style={{ backgroundColor, borderColor, color: textColor }}
                />
            </header>
            <section>
                <Movie />
            </section>
        </main>
    )
}

export default App
