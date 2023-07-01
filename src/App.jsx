import { useState } from 'react'
import './App.css'
import ToggleSwitch from './components/ToggleSwitch'

function App() {
    const [isLightMode, setIsLightMode] = useState(false)

    const changeTheme = () => {
      setIsLightMode(!isLightMode)
    }

    const backgroundColor = isLightMode ? '#EEEEEE' : '#181818'
    const textColor = isLightMode ? '#181818' : '#EEEEEE'

    return (
        <main style={{ backgroundColor, textColor }}>
            <ToggleSwitch click={changeTheme} />
        </main>
    )
}

export default App
