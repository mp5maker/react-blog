import React from 'react'
import PropTypes from 'prop-types'

export const ThreeAmbientLight = ({ ...props }) => {
    return (
        <ambientLight {...props} />
    )
}

ThreeAmbientLight.propTypes = {
    args: PropTypes.array, // color, intensity
    castShadow: PropTypes.bool,
}