import React from 'react'
import PropTypes from 'prop-types'

export const ThreeSphereGeometry = ({ children, ...props }) => {
    return (
        <>
            <sphereGeometry attach={`geometry`} {...props} />
        </>
    )
}

ThreeSphereGeometry.propTypes = {
    args: PropTypes.array, // radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength
}