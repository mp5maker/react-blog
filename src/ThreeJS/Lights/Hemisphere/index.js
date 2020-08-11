import React from 'react'
import PropTypes from 'prop-types'

export const ThreeHemisphereLight = ({ ...props }) => {
    return (
        <hemisphereLight {...props} />
    )
}

ThreeHemisphereLight.propTypes = {
    args: PropTypes.array, // skyColor, groundColor, intensity
    castShadow: PropTypes.boolean,
    color: PropTypes.any,
    groundColor: PropTypes.any,
    position: PropTypes.any
}