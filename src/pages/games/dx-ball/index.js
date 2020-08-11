import React from "react"

import { Layout } from 'Components/Layout'
import { ThreeCanvas } from 'ThreeJS/Canvas'
import { ThreeAmbientLight } from 'ThreeJS/Lights/Ambient'
import { ThreePointLight } from 'ThreeJS/Lights/Point'
import { ThreeBoxGeometry } from 'ThreeJS/Geometry/Box'

export default function DxBall() {
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
                    <mesh
                        position={[1.2, 0, 0]}>
                        <ThreeBoxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial attach="material" />
                    </mesh>
                </ThreeCanvas>
            </Layout>
        </>
    )
}
