import React from "react"

import { Layout } from 'Components/Layout'
import { Animation } from 'Components/Animation'
import { AnimationBall } from "Utilities/Animation/Ball"
import { AnimationPaddle } from "Utilities/Animation/Paddle"
import { AnimationBricks } from "Utilities/Animation/Bricks"
import { useDimension } from "Hooks/UseDimension"
import { useMedia } from "Hooks/UseMedia"
import { useKeyboard } from "Hooks/UseKeyboard"

let points = 0;
export default function Breakout() {
    const { width, height } = useDimension()
    const isWidthGreaterThan767 = useMedia("(min-width: 767px)")
    const [anime, setAnime] = React.useState("")
    const [animeBall, setAnimeBall] = React.useState("")
    const [animePaddle, setAnimePaddle] = React.useState("")
    const [animeBricks, setAnimeBricks] = React.useState("")
    const { keyValue, keyCode } = useKeyboard()

    React.useEffect(() => {
        if (keyValue === 's' || keyCode === 83) {
            points = 0;
            if (animeBall) animeBall.restart()
            if (animePaddle) animePaddle.restart()
            if (animeBricks) animeBricks.restart()
            if (anime) anime.start()
        }
    }, [anime, animeBall, animePaddle, animeBricks, keyValue, keyCode])

    const onAnimation = React.useCallback(({ animation }) => {
        /* Canvas and Context */
        setAnime(animation)
        const canvas = animation.getCanvas()
        const context = animation.getContext()
        /* Objects */
        const ball = new AnimationBall({ canvas, context })
        setAnimeBall(ball)
        const bricks = new AnimationBricks({ canvas, context })
        setAnimeBricks(bricks)
        const paddle = new AnimationPaddle({ canvas, context })
        setAnimePaddle(paddle)

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

            /* Destroy Bricks */
            const { points: newPoints, allDestroyed } = bricks.detectCollision({
                x: ballX,
                y: ballY,
                callback: () =>  {
                    ball.reverseY()
                    ball.reverseX()
                }
            })
            if (newPoints) {
                points += newPoints
                console.log(points)
            }

            if (allDestroyed) {
                console.log('Winner')
                animation.stop()
            }

            /* Game Over */
            if (ball.location().y > canvas.width) {
                console.log('Game Over')
                points = 0
                animation.stop()
            }
        }

        /* Animation Logic */
        animation.setStage(stage)

        /* Initialization */
        ball.create()
        bricks.create()
        paddle.init()
        paddle.create()

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
