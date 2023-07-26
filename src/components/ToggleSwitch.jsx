// Prop Types
import PropTypes from 'prop-types'

// Styles
import '../styles/toggle-switch.scss'

const ToggleSwitch = ({ click }) => {
    return (
        <>
            <label className="switch">
                <input className="toggle" type="checkbox" onClick={click} />
                <span className="slider"></span>
                <span className="card-side"></span>
            </label>
        </>
    )
}

export default ToggleSwitch

ToggleSwitch.propTypes = {
    click: PropTypes.func,
}
