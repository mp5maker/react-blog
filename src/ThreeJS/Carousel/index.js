import React from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { useThreeColors } from 'Hooks/UseThreeColors'
import { ThreeAmbientLight } from 'ThreeJS/Lights/Ambient'
import { ThreeMesh } from 'ThreeJS/Mesh'
import { ThreeBoxGeometry } from 'ThreeJS/Geometry/Box'
import { ThreeMeshStandardMaterial } from 'ThreeJS/Material/Standard'
import { ThreeOrbitControls } from 'ThreeJS/Controls/Orbit'

const numberOfItems = 5
const radius = 5

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

    return (
        <>
            {
                colors && (
                    <>
                        <ThreeAmbientLight args={[colors.primaryColor]} />
                        <ThreeOrbitControls />
                        {
                            [ ...new Array(numberOfItems)].map((notNeeded, index) => {
                                const t = (index / numberOfItems) * 2 * Math.PI;

                                const Box = (
                                    <ThreeMesh
                                        position-z={radius * Math.sin(t)}
                                        position-x={radius * Math.cos(t)}>
                                        <ThreeBoxGeometry args={[1, 1, 1]} />
                                        <ThreeMeshStandardMaterial color={colors.foregroundColor} />
                                    </ThreeMesh>
                                )

                                if (index === 0) {
                                    return (
                                        <React.Fragment key={index}>
                                            <React.Suspense fallback={Box}>
                                                <Asset
                                                    position-z={radius * Math.sin(t)}
                                                    position-x={radius * Math.cos(t)}
                                                    url="/three-models/dog.glb" />
                                            </React.Suspense>
                                        </React.Fragment>
                                    )
                                }

                                return (
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