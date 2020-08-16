import React from "react"
import { Howl } from 'howler'

import { Layout } from 'Components/Layout'
import { Animation } from 'Components/Animation'
import { useDimension } from "Hooks/UseDimension"
import { useMedia } from "Hooks/UseMedia"
import { useKeyboard } from "Hooks/UseKeyboard"
import { AnimationZombie } from "Utilities/Animation/Zombie"
import { AnimationObstacles } from "Utilities/Animation/Obstacles"
import { AnimationLine } from "Utilities/Animation/Line"

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
    const [obs, setObs] = React.useState("")
    const { keyValue, keyCode } = useKeyboard()

    React.useEffect(() => {
        if (keyValue === 's' || keyCode === 83) {
            points = 0;
            if (zomb) {
                zomb.restart()
                zomb.walk()
            }
            if (obs) {
                obs.restart()
                obs.play()
            }
            if (anime) {
                anime.start()
            }
            gameMusic.stop()
            gameMusic.play()
        }
        if (keyValue === 'a' || keyCode === 65) zomb && zomb.jump()
    }, [anime, zomb, obs, keyValue, keyCode])

    const onAnimation = React.useCallback(({ animation }) => {
        /* Canvas and Context */
        setAnime(animation)
        const canvas = animation.getCanvas()
        const context = animation.getContext()
        /* Objects */
        const zombie = new AnimationZombie({ canvas, context })
        setZomb(zombie)
        const obstacles = new AnimationObstacles({ canvas, context })
        setObs(obstacles)
        const line = new AnimationLine({ canvas, context })

        const stage = function () {
            if (zombie.isLoaded()) {
                animation.clear()
                line.create()
                zombie.motion(animation.getFrame())
                if (obstacles.isPlaying()) {
                    const { x, y } = zombie.getPosition()
                    obstacles.move()
                    points++
                    console.debug(points)
                    if (obstacles.detectCollision({ x, y })) {
                        zombie.dead()
                        obstacles.stop()
                        animation.stop()
                        gameMusic.stop()
                    }
                }
            }
        }

        /* Animation Logic */
        animation.setStage(stage)
        zombie.init().then(() => {
            zombie.create()
            animation.start()
            obstacles.init()
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
