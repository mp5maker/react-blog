import React from "react"
import * as THREE from 'three'

import { Layout } from 'Components/Layout'
// import { useThreeColors } from 'Hooks/UseThreeColors'
import { ThreeCanvas } from 'ThreeJS/Canvas'
import { ThreeAmbientLight } from 'ThreeJS/Lights/Ambient'
import { ThreePointLight } from 'ThreeJS/Lights/Point'
import { ThreeBoxGeometry } from 'ThreeJS/Geometry/Box'
import { ThreeMesh } from 'ThreeJS/Mesh'
import { ThreeMeshStandardMaterial } from 'ThreeJS/Material/Standard'


export default function DxBall() {
    // const colors = useThreeColors()

    return (
        <>
            <Layout page={`Games`}>
                <ThreeCanvas
                    antialias={`true`}
                    shadowMap={THREE.PCFSoftShadowMap}
                    camera={{
                        fov: 75,
                        near: 0.1,
                        far: 1000,
                        position: [0, 0, 5]
                    }}
                    style={{
                        width: `99%`,
                        height: `100%`,
                        minHeight: `500px`
                    }}
                    pixelRatio={window.devicePixelRatio || 1}>
                    <ThreeAmbientLight />
                    <ThreePointLight position={[10, 10, 10]} />
                    <ThreeMesh
                        position={[0, 0, 0]}>
                        <ThreeBoxGeometry args={[1, 1, 1]} />
                        <ThreeMeshStandardMaterial attach="material" />
                    </ThreeMesh>
                </ThreeCanvas>
            </Layout>
        </>
    )
}
