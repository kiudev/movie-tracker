import PropTypes from 'prop-types'
import '../styles/ToggleSwitch.scss'

const ToggleSwitch = ({ click }) => {


    return (
        <div>
            <label className="switch">
                <input className="toggle" type="checkbox" onClick={click} />
                <span className="slider"></span>
                <span className="card-side"></span>
            </label>
        </div>
    )
}

ToggleSwitch.propTypes = {
    click: PropTypes.func,
}

export default ToggleSwitch
