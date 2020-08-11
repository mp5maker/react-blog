import React from 'react'
import PropTypes from 'prop-types'

export const ThreeMesh = ({ children, ...props }) => {
    return (
        <mesh
            {...props}>
            { children }
        </mesh>
    )
}

ThreeMesh.propTypes = {
    onClick: PropTypes.func,
    onContextMenu: PropTypes.func,
    onDoubleClick: PropTypes.func,
    onWheel: PropTypes.func,
    onPointerUp: PropTypes.func,
    onPointerDown: PropTypes.func,
    onPointerOver: PropTypes.func,
    onPointerOut: PropTypes.func,
    onPointerEnter: PropTypes.func,
    onPointerLeave: PropTypes.func,
    onPointerMove: PropTypes.func,
    onUpdate: PropTypes.func,
    position: PropTypes.any,
    geometry: PropTypes.any,
    material: PropTypes.any,
    rotation: PropTypes.any,
}