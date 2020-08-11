import React from 'react'
import PropTypes from 'prop-types'
import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'

export const ThreeCanvas = ({ children, ...props }) => {
    return (
        <>
            <Canvas
                { ...props }>
                { children }
            </Canvas>
        </>
    )
}

ThreeCanvas.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node
    ]),
    gl: PropTypes.shape({}),
    camera: PropTypes.shape({}),
    raycaster: PropTypes.shape({}),
    shadowMap: PropTypes.oneOf([
        THREE.PCFSoftShadowMap,
        THREE.PCFShadowMap
    ]),
    colorManagement: PropTypes.any,
    vr: PropTypes.bool,
    gl2: PropTypes.bool,
    concurrent: PropTypes.bool,
    resize: PropTypes.any,
    orthographic: PropTypes.bool,
    noEvents: PropTypes.bool,
    pixelRatio: PropTypes.any,
    invalidateFrameloop: PropTypes.bool,
    updateDefaultCamera: PropTypes.bool,
    onCreated: PropTypes.func,
    onPointerMissed: PropTypes.func,
    antialias: PropTypes.any,
    alpha: PropTypes.bool,
    powerPreference: PropTypes.oneOf([
        'high-performance'
    ])
}