import { useState, useEffect } from 'react'
import Movie from '../components/Movie'
import '../styles/movie.scss'

const TopRated = () => {
    const [movie, setMovie] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedMovie, setSelectedMovie] = useState(false)

    useEffect(() => {
        const fetchMovies = async () => {
            const apiKey = '72201f7f034f07fc527ec840cbc0ebd6'
            const pages = 'page=1'
            const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&${pages}`

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
    const ratedFirstRow = movie.slice(0, 4)
    const ratedSecondRow = movie.slice(4, 8)
    const ratedThirdRow = movie.slice(8, 12)
    const ratedFourthRow = movie.slice(12, 16)
    const ratedFifthRow = movie.slice(16, 20)

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
                {ratedFirstRow.map(data => (
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
                {ratedSecondRow.map(data => (
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
                {ratedThirdRow.map(data => (
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
                {ratedFourthRow.map(data => (
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
                {ratedFifthRow.map(data => (
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

export default TopRated
