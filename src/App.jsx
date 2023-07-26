// Components
import Trending from './components/Trending'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

// Hooks
import { useState } from 'react'

// Styles
import './App.css'

// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Routes
import Popular from './routes/Popular'
import Current from './routes/Current'
import TopRated from './routes/TopRated'
import Upcoming from './routes/Upcoming'

function App() {
    const light = '#EEEEEE'
    const dark = '#181818'

    const [isLightMode, setIsLightMode] = useState(false)

    const changeTheme = () => {
        setIsLightMode(!isLightMode)
    }

    const backgroundColor = isLightMode ? light : dark
    const textColor = isLightMode ? dark : light
    const bgHover = isLightMode ? dark : light

    return (
        <BrowserRouter>
            <main
                style={{
                    backgroundColor,
                    color: textColor,
                    position: 'absolute',
                    minHeight: '100%',
                    width: '100%',
                    top: '0',
                    left: '0',
                    zIndex: '9',
                }}
            >
                <header>
                    <NavBar
                        bgHover={bgHover}
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        changeTheme={changeTheme}
                    />
                </header>
                <section>
                    <Trending />
                    <Routes>
                        <Route exact path="/" Component={Popular} />
                        <Route path="/current" Component={Current} />
                        <Route path="/top-rated" Component={TopRated} />
                        <Route path="/upcoming" Component={Upcoming} />
                    </Routes>
                </section>
                <footer>
                    <Footer />
                </footer>
            </main>
        </BrowserRouter>
    )
}

export default App
