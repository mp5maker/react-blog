import React from "react"
import { Howl } from 'howler'

import { Layout } from 'Components/Layout'
import { Animation } from 'Components/Animation'
import { useDimension } from "Hooks/UseDimension"
import { useMedia } from "Hooks/UseMedia"
import { useKeyboard } from "Hooks/UseKeyboard"
import { AnimationZombie } from "Utilities/Animation/Zombie"

// const gameOver = new Howl({
//     src: '/sounds/game_over.mp3'
// })

const gameMusic = new Howl({
    src: '/sounds/breakout-music.mp3',
    loop: true
})

let points = 0;
export default function Breakout() {
    const { width, height } = useDimension()
    const isWidthGreaterThan767 = useMedia("(min-width: 767px)")
    const [anime, setAnime] = React.useState("")
    const [zomb, setZomb] = React.useState("")
    const { keyValue, keyCode } = useKeyboard()

    React.useEffect(() => {
        if (keyValue === 's' || keyCode === 83) {
            points = 0;
            gameMusic.stop()
            gameMusic.play()
        }
    }, [anime, zomb, keyValue, keyCode])

    const onAnimation = React.useCallback(({ animation }) => {
        /* Canvas and Context */
        setAnime(animation)
        const canvas = animation.getCanvas()
        const context = animation.getContext()
        /* Objects */
        const zombie = new AnimationZombie({ canvas, context })
        setZomb(zombie)

        const line = () => {
            context.save()
            context.beginPath()
            context.moveTo(0, (canvas.height / 2) + 80)
            context.lineTo(canvas.width, (canvas.height / 2) + 80)
            context.strokeStyle = 'orange'
            context.stroke()
            context.closePath()
            context.restore()
        }

        const stage = function () {
            if (zombie.isLoaded()) {
                animation.clear()
                line()
                zombie.motion(animation.getFrame())
            }
        }

        /* Animation Logic */
        animation.setStage(stage)
        zombie.init().then(() => {
            zombie.create()
            animation.start()
        })
    }, [])

    React.useEffect(() => {
        return () => {
            anime && anime.stop()
            gameMusic.stop()
        }
    }, [anime])

    return (
        <>
            <Layout page={`Games: Zombie Run`}>
                <Animation
                    width={isWidthGreaterThan767 ? width * 0.7 * (3 / 5) : width * 0.9}
                    height={height * 2 / 3}
                    onAnimation={onAnimation} />
            </Layout>
        </>
    )
}
