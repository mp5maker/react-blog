import React from "react"

import { Layout } from 'Components/Layout'
import { Animation } from 'Components/Animation'
import { AnimationBall } from "Components/Animation/Ball"
import { useDimension } from "Hooks/UseDimension"
import { useMedia } from "Hooks/UseMedia"

export default function Breakout() {
    const { width, height } = useDimension()
    const isWidthGreaterThan767 = useMedia("(min-width: 767px)")

    const onAnimation = React.useCallback(({ animation }) => {
        const canvas = animation.getCanvas()
        const context = animation.getContext()
        const ball = new AnimationBall({ canvas, context })

        const stage = function() {
            animation.clear()
            ball.move()
            ball.detectCollision()
        }

        animation.setStage(stage)
        ball.create()
        animation.start()
    }, [])

    return (
        <>
            <Layout page={`Games`}>
                <Animation
                    width={isWidthGreaterThan767 ? width * 0.7 * (3/5) : width * 0.9}
                    height={height}
                    onAnimation={onAnimation} />
            </Layout>
        </>
    )
}
