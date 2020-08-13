import React from 'react'
import { extend, useFrame, useThree } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

export const ThreeOrbitControls = ({ minDistance = 0, maxDistance = 200, enableRotate = true }) => {
    const { camera, gl } = useThree()
    const controls = React.useRef()

    useFrame((state) => {
        controls.current.update()
    })

    React.useEffect(() => {
        controls.current.minDistance = minDistance
        controls.current.maxDistance = maxDistance
        controls.current.enableRotate = enableRotate
    }, [minDistance, maxDistance, enableRotate])

    return (
        <orbitControls
            ref={controls}
            args={[camera, gl.domElement]} />
    )
}