import React from 'react'
import PropTypes from 'prop-types'


export const ThreeDirectionalLight = ({ ...props }) => {
    return (
        <directionalLight {...props} />
    )
}

ThreeDirectionalLight.propTypes = {
    args: PropTypes.array, // color, intensity
    castShadow: PropTypes.boolean,
    position: PropTypes.any,
}