import React from 'react'
import PropTypes from 'prop-types'

export const ThreePointLight = ({ ...props }) => {
    return (
        <pointLight {...props} />
    )
}


ThreePointLight.propTypes = {
    args: PropTypes.array, // color, intensity, distance, decay
    decay: PropTypes.number,
    distance: PropTypes.number,
    power: PropTypes.number,
}