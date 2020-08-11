import React from 'react'
import PropTypes from 'prop-types'

export const ThreeMeshStandardMaterial = ({ ...props }) => {
    return (
        <>
            <meshStandardMaterial attach="material" {...props} />
        </>
    )
}

ThreeMeshStandardMaterial.propTypes = {
    alpha: PropTypes.any,
    aoMap: PropTypes.any,
    aoMapIntensity: PropTypes.number,
    bumpMap: PropTypes.any,
    bumpScale: PropTypes.number,
    color: PropTypes.any,
    displacementMap: PropTypes.any,
    displacementScale: PropTypes.number,
    displacementBias: PropTypes.number,
    emissive: PropTypes.any,
    emissiveMap: PropTypes.any,
    emissiveIntensity: PropTypes.number,
    envMap: PropTypes.any,
    envMapIntensity: PropTypes.number,
    lightMap: PropTypes.any,
    lightMapIntensity: PropTypes.number,
    map: PropTypes.any,
    metalness: PropTypes.number,
    metalnessMap: PropTypes.any,
    morphNormals: PropTypes.bool,
    morphTargets: PropTypes.bool,
    normalMap: PropTypes.any,
    normalMapType: PropTypes.number,
    normalScale: PropTypes.any,
    refractionRatio: PropTypes.any,
    roughness: PropTypes.number,
    roughnessMap: PropTypes.any,
    skinning: PropTypes.bool,
    vertexTangents: PropTypes.bool,
    wireframe: PropTypes.bool,
    wireframeLinecap: PropTypes.string,
    wireframeLinewidth: PropTypes.number
}