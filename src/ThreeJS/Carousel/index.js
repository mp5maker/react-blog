import React from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { useThreeColors } from 'Hooks/UseThreeColors'
import { ThreeAmbientLight } from 'ThreeJS/Lights/Ambient'
import { ThreeMesh } from 'ThreeJS/Mesh'
import { ThreeBoxGeometry } from 'ThreeJS/Geometry/Box'
import { ThreeMeshStandardMaterial } from 'ThreeJS/Material/Standard'
import { ThreeOrbitControls } from 'ThreeJS/Controls/Orbit'

const radius = 12

const Asset = ({ url, ...props }) => {
    const gltf = useLoader(GLTFLoader, url)

    return (
        <primitive
            object={gltf.scene}
            dispose={null}
            {...props} />
    )
}

export const ThreeCarousel = () => {
    const colors = useThreeColors()

    const items = [
        '/three-models/dog.glb',
        '/three-models/table.glb',
        '/three-models/ancient-block.glb',
        '/three-models/sword.glb',
        '/three-models/bricks.glb',
        '',
    ]

    return (
        <>
            {
                colors && (
                    <>
                        <ThreeAmbientLight args={[colors.primaryColor]} />
                        <ThreeOrbitControls />
                        {
                            items.map((url, index) => {
                                const t = (index / items.length) * 2 * Math.PI;

                                const Box = (
                                    <ThreeMesh
                                        position-z={radius * Math.sin(t)}
                                        position-x={radius * Math.cos(t)}>
                                        <ThreeBoxGeometry args={[1, 1, 1]} />
                                        <ThreeMeshStandardMaterial color={colors.foregroundColor} />
                                    </ThreeMesh>
                                )

                                return url ? (
                                    <React.Fragment key={index}>
                                        <React.Suspense fallback={Box}>
                                            <Asset
                                                position-z={radius * Math.sin(t)}
                                                position-x={radius * Math.cos(t)}
                                                url={url} />
                                        </React.Suspense>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment key={index}>
                                        { Box }
                                    </React.Fragment>
                                )
                            })
                        }
                    </>
                )
            }
        </>
    )
}