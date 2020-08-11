import React from 'react'
import PropTypes from 'prop-types'

export const ThreeSpotLight = ({ ...props }) => {
    return (
        <spotLight {...props} />
    )
}

ThreeSpotLight.propTypes = {
    args: PropTypes.array, // color, intensity, distance, angle, penumbra, decay
    decay: PropTypes.number,
    angle: PropTypes.number,
    castShadow: PropTypes.bool,
    distance: PropTypes.number,
    penumbra: PropTypes.number,
    position: PropTypes.any,
    power: PropTypes.number,
}