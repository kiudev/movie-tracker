import { useEffect, useState } from 'react'
import '../styles/movie.scss'

const Trending = () => {
    const apiKey = '72201f7f034f07fc527ec840cbc0ebd6'

    const [movie, setMovie] = useState([])

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const apiTrending = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`

            try {
                const response = await fetch(apiTrending)
                const data = await response.json()
                const trendingData = data.results
                setMovie(trendingData)
            } catch (error) {
                console.log(error)
            }
        }
        fetchTrendingMovies()
    }, [])

    const trendingRow = movie.slice(0, 19)

    return (
        <>
            <header style={{marginLeft: '-180px'}}>
                <h2>Trending</h2>
            </header>
            <div className='trending'>
                
                {trendingRow.map(data => (
                    <div className='trending-ul' key={data.id}>
                        <img className='trending-poster' src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Trending
