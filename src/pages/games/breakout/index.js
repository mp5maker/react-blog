import React from "react"

import { Layout } from 'Components/Layout'
import { Animation } from 'Components/Animation'
import { AnimationBall } from "Utilities/Animation/Ball"
import { AnimationPaddle } from "Utilities/Animation/Paddle"
import { AnimationBricks } from "Utilities/Animation/Bricks"
import { useDimension } from "Hooks/UseDimension"
import { useMedia } from "Hooks/UseMedia"

let paddle = ''

export default function Breakout() {
    const { width, height } = useDimension()
    const isWidthGreaterThan767 = useMedia("(min-width: 767px)")

    const onAnimation = React.useCallback(({ animation }) => {
        const canvas = animation.getCanvas()
        const context = animation.getContext()
        const ball = new AnimationBall({ canvas, context })
        const bricks = new AnimationBricks({ canvas, context })
        paddle = new AnimationPaddle({ canvas, context })

        const stage = function() {
            animation.clear()

            ball.move()
            ball.detectCollision()
            paddle.move()
            bricks.create()

            /* Paddle It Off */
            const { x: ballX, y: ballY } = ball.location()
            const ballRequiredY = ballY - ball.getRadius()
            const ballRequiredX = ballX
            if (paddle.bounceOff({ x: ballRequiredX, y: ballRequiredY })) ball.reverseY()

            /* Game Over */
            if (ball.location().y > canvas.width) animation.stop()
        }

        animation.setStage(stage)
        ball.create()
        bricks.create()
        paddle.init()
        paddle.create()
        animation.start()
    }, [])

    React.useEffect(() => {
        return () => paddle && paddle.destroy()
    }, [])

    return (
        <>
            <Layout page={`Games`}>
                <Animation
                    width={isWidthGreaterThan767 ? width * 0.7 * (3/5) : width * 0.9}
                    height={height * 2 / 3}
                    onAnimation={onAnimation} />
            </Layout>
        </>
    )
}
