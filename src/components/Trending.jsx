import { useEffect, useState, useRef } from 'react'
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

    const slider = useRef(null)

    const scrollRight = () => {
        if (slider.current) {
            slider.current.scrollLeft += 500
        }
    }

    const scrollLeft = () => {
        if (slider.current) {
            slider.current.scrollLeft -= 500
        }
    }

    return (
        <>
            <div ref={slider} className="trending">
                <section className="arrow-slider">
                    <svg
                        className="left"
                        xmlns="http://www.w3.org/2000/svg"
                        width="62"
                        height="62"
                        viewBox="0 0 512 512"
                        onClick={scrollLeft}
                    >
                        <path
                            fill="#eeeeee"
                            d="M256 16.042c-132.548 0-240 107.451-240 240s107.452 240 240 240s240-107.452 240-240s-107.452-240-240-240ZM403.078 403.12A207.253 207.253 0 1 1 447.667 337a207.364 207.364 0 0 1-44.589 66.12Z"
                        />
                        <path
                            fill="#eeeeee"
                            d="m272.614 164.987l-22.628-22.627l-113.681 113.681l113.681 113.681l22.628-22.627l-75.054-75.054H385v-32H197.56l75.054-75.054z"
                        />
                    </svg>
                    <svg
                        className="right"
                        xmlns="http://www.w3.org/2000/svg"
                        width="62"
                        height="62"
                        viewBox="0 0 512 512"
                        onClick={scrollRight}
                    >
                        <path
                            fill="#eeeeee"
                            d="M256.25 16.042c-132.548 0-240 107.451-240 240s107.452 240 240 240s240-107.452 240-240s-107.45-240-240-240ZM403.328 403.12A207.253 207.253 0 1 1 447.917 337a207.364 207.364 0 0 1-44.589 66.12Z"
                        />
                        <path
                            fill="#eeeeee"
                            d="m239.637 164.987l75.053 75.054H128.137v32H314.69l-75.053 75.054l22.627 22.627l113.681-113.681L262.264 142.36l-22.627 22.627z"
                        />
                    </svg>
                </section>
                <div className="trending-info">
                    {trendingRow.map(data => (
                        <div className="trending-ul" key={data.id}>
                            <img
                                className="trending-poster"
                                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                                alt={data.title}
                            />
                            <p className='trending-title'>{data.title}</p>
                            <p>{data.release_date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Trending
