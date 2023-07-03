import PropTypes from 'prop-types'
import '../styles/nav.scss'

const Nav = ({ style }) => {
    return (
        <div>
            <ul>
                <li>
                    <button style={style}>Popular</button>
                </li>
                <li>
                    <button style={style}>Now Playing</button>
                </li>
                <li>
                    <button style={style}>Upcoming</button>
                </li>
                <li>
                    <button style={style}>Top Rated</button>
                </li>
            </ul>
        </div>
    )
}

Nav.propTypes = {
    style: PropTypes.string,
}

export default Nav
