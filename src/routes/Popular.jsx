import PopularMovie from '../components/PopularMovie'
import MovieDetail from '../components/MovieDetail'
import { useState } from 'react'

const Popular = () => {
    const [selectedMovie, setSelectedMovie] = useState(null)

    const handleMovieClick = movie => {
        setSelectedMovie(movie)
    }

    return (
        <div>
            {selectedMovie ? (
                <MovieDetail movie={selectedMovie} />
            ) : (
                <PopularMovie onMovieClick={handleMovieClick} />
            )}
        </div>
    )
}

export default Popular
