import React from 'react'
import PropTypes from 'prop-types'

export const ThreeMesh = React.forwardRef((props, ref) => {
    const { children, ...otherProps } = props

    return (
        <mesh
            ref={ref}
            {...otherProps}>
            {children}
        </mesh>
    )
})

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