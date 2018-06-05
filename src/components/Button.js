import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => (
    <button onClick={props.onclick}>
        {props.label}
    </button>
)

Button.propTypes = {
    onclick:  PropTypes.func.isRequired,
    label: PropTypes.string,
}

Button.defaultProps = {
    label: 'Click-me !'
}

export default Button