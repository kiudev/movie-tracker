import { useState, useEffect } from 'react'
import Movie from '../components/Movie'
import '../styles/movie.scss'

const Current = () => {
    const [movie, setMovie] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedMovie, setSelectedMovie] = useState(false)

    useEffect(() => {
        const fetchMovies = async () => {
            const apiKey = '72201f7f034f07fc527ec840cbc0ebd6'
            const pages = 'page=1'
            const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&${pages}`

            try {
                const response = await fetch(apiUrl)
                const data = await response.json()
                const movieData = data.results
                setMovie(movieData)
            } catch (error) {
                console.error(error)
            }
            setIsLoading(false)
        }
        fetchMovies()
    }, [])

    // Rows
    const currentFirstRow = movie.slice(0, 4)
    const currentSecondRow = movie.slice(4, 8)
    const currentThirdRow = movie.slice(8, 12)
    const currentFourthRow = movie.slice(12, 16)
    const currentFifthRow = movie.slice(16, 20)

    const handleRowClick = movie => {
        setSelectedMovie(movie)
    }

    const handleBackdropClick = backdrop => {
        setSelectedMovie(!backdrop)
    }

    if (isLoading) {
        return (
            <div>
                <div className="loader-wrapper">
                    <div className="loader"></div>
                </div>
            </div>
        )
    }

    return (
        <>
            <section>
                {currentFirstRow.map(data => (
                    <div key={data.id}>
                        <Movie
                            data={data}
                            selectedMovie={selectedMovie}
                            handleRowClick={handleRowClick}
                            handleBackdropClick={handleBackdropClick}
                        />
                    </div>
                ))}
            </section>
            <section>
                {currentSecondRow.map(data => (
                    <div key={data.id}>
                        <Movie
                            data={data}
                            selectedMovie={selectedMovie}
                            handleRowClick={handleRowClick}
                            handleBackdropClick={handleBackdropClick}
                        />
                    </div>
                ))}
            </section>
            <section>
                {currentThirdRow.map(data => (
                    <div key={data.id}>
                        <Movie
                            data={data}
                            selectedMovie={selectedMovie}
                            handleRowClick={handleRowClick}
                            handleBackdropClick={handleBackdropClick}
                        />
                    </div>
                ))}
            </section>
            <section>
                {currentFourthRow.map(data => (
                    <div key={data.id}>
                        <Movie
                            data={data}
                            selectedMovie={selectedMovie}
                            handleRowClick={handleRowClick}
                            handleBackdropClick={handleBackdropClick}
                        />
                    </div>
                ))}
            </section>
            <section>
                {currentFifthRow.map(data => (
                    <div key={data.id}>
                        <Movie
                            data={data}
                            selectedMovie={selectedMovie}
                            handleRowClick={handleRowClick}
                            handleBackdropClick={handleBackdropClick}
                        />
                    </div>
                ))}
            </section>
        </>
    )
}

export default Current
