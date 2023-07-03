import { useState } from 'react'
import ToggleSwitch from './components/ToggleSwitch'
import { Movie } from './components/Movie'
import Nav from './components/Nav'
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
    const borderColorButton = isLightMode ? dark : light
    const txtColorButton = isLightMode ? dark : light

    return (
        <div style={{ backgroundColor, color: textColor }}>
            <header>
                <Nav style={{backgroundColor, border: '1px solid', borderColor: borderColorButton, color: txtColorButton }} />
                <ToggleSwitch click={changeTheme} />
            </header>
            <section>
                <Movie />
            </section>
        </div>
    )
}

export default App