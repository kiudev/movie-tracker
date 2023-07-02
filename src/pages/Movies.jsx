import { useState } from 'react'
import ToggleSwitch from '../components/ToggleSwitch'
import { Movie } from '../components/Movie'
import '../App.css'

const Movies = () => {
    const light = '#EEEEEE'
    const dark = '#181818'

    const [isLightMode, setIsLightMode] = useState(false)

    const changeTheme = () => {
        setIsLightMode(!isLightMode)
    }

    const backgroundColor = isLightMode ? light : dark
    const textColor = isLightMode ? dark : light
    // const borderColor = isLightMode ? dark : light

    return (
        <main style={{ backgroundColor, color: textColor }}>
            <header>
                <ToggleSwitch click={changeTheme} />
                <ul>
                    <li>
                        <button>Popular</button>
                    </li>
                    <li>
                        <button>Now Playing</button>
                    </li>
                    <li>
                        <button>Upcoming</button>
                    </li>
                    <li>
                        <button>Top Rated</button>
                    </li>
                </ul>
            </header>
            <section>
                <Movie />
            </section>
        </main>
    )
}

export default Movies
