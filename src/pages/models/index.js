import React from 'react'

import { Layout } from 'Components/Layout'
import { ThreeCanvas } from 'ThreeJS/Canvas'
import { ThreeCarousel } from 'ThreeJS/Carousel'
import { useDimension } from "Hooks/UseDimension"
import { useMedia } from "Hooks/UseMedia"

const hasWindow = typeof window !== 'undefined'

export default function Models() {
    const { width, height } = useDimension()
    const isWidthGreaterThan767 = useMedia("(min-width: 767px)")

    return (
        <>
            <Layout page={`3d Models`}>
                <ThreeCanvas
                    style={{
                        width: isWidthGreaterThan767 ? width * 0.7 * (3/ 5) : width * 0.9,
                        height: height * 2 / 3
                    }}
                    camera={{
                        fov: 75,
                        near: 0.1,
                        far: 1000,
                        position: [0, 15, 20]
                    }}
                    pixelRatio={hasWindow ? window.devicePixelRatio : 1}
                    antialias={`true`}>
                    <ThreeCarousel />
                </ThreeCanvas>
            </Layout>
        </>
    )
}