import React from "react"

import { Layout } from 'Components/Layout'
import { useThreeColors } from 'Hooks/UseThreeColors'
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
                    style={{
                        width: `99%`,
                        height: `100%`,
                        minHeight: `500px`
                    }}>
                    <ThreeAmbientLight />
                    <ThreePointLight position={[10, 10, 10]} />
                    <ThreeMesh
                        position={[1.2, 0, 0]}>
                        <ThreeBoxGeometry args={[1, 1, 1]} />
                        <ThreeMeshStandardMaterial attach="material" />
                    </ThreeMesh>
                </ThreeCanvas>
            </Layout>
        </>
    )
}
