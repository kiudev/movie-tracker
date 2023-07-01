import PropTypes from 'prop-types'
import '../styles/tracker.scss'

const Tracker = ({ style }) => {
    return (
        <div>
            <input style={style} className="tracker" type="text" />
        </div>
    )
}

Tracker.propTypes = {
    style: PropTypes.string,
}

export default Tracker
