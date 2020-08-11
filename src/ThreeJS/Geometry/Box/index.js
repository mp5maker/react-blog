import React from 'react'
import PropTypes from 'prop-types'

export const ThreeBoxGeometry = ({ children, ...props }) => {
    return (
        <>
            <boxGeometry attach={`geometry`} {...props} />
        </>
    )
}

ThreeBoxGeometry.propTypes = {
    args: PropTypes.array, // width, height, depth, widthSegments, heightSegments, depthSegments
}