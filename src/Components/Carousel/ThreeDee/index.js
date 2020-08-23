import * as React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Howl } from 'howler'

import { RoundButton } from 'Components/Button'
import { useKeyboard } from 'Hooks/UseKeyboard'

const swipeSound = new Howl({
    src: "/sounds/carousel-slide.mp3"
})

export const ThreeDeeCarousel = ({
    list = [],
    display,
    defaultIndex = 0,
    onClick,
    cardHeight = 300,
    cardWidth = 300,
    ...props
}) => {
    const [currentActiveIndex, setCurrentActiveIndex] = React.useState(defaultIndex)
    const { keyCode } = useKeyboard()

    const moveLeft = React.useCallback(() => {
        const shiftTo = currentActiveIndex - 1
        if (currentActiveIndex !== 0) {
            swipeSound.play()
            setCurrentActiveIndex(shiftTo)
        }
    }, [currentActiveIndex])

    const moveRight = React.useCallback(() => {
        const shiftTo = currentActiveIndex + 1
        if (currentActiveIndex !== list.length - 1) {
            swipeSound.play()
            setCurrentActiveIndex(shiftTo)
        }
    }, [currentActiveIndex, list])

    React.useEffect(() => {
        const LEFT = 37
        const RIGHT = 39
        if (keyCode === LEFT) moveLeft()
        if (keyCode === RIGHT) moveRight()
    }, [keyCode])

    const perAngle = 360 / list.length
    const radius = Math.round((cardWidth / 2) / Math.tan(Math.PI / list.length))
    const carouselRotate = (currentActiveIndex / list.length * -360)

    return (
        <>
            <div
                style={{ position: `relative`}}>


                <div
                    style={{
                        postion: `relative`,
                        display: `flex`,
                        justifyContent: `center`,
                        alignItems: `center`
                    }}>
                    <div
                        style={{
                            perspective: 1000,
                            width: cardWidth,
                            height: cardHeight,
                            position: `relative`,
                        }}
                        className="custom-carousel-container">
                        <div
                            style={{
                                width: `100%`,
                                height: `100%`,
                                position: `absolute`,
                                transformStyle: `preserve-3d`,
                                transition: `transform 0.25s linear`,
                                transform: `translateZ(-${radius}px) rotateY(${carouselRotate}deg)`,
                            }}
                            className="custom-carousel-list">
                            {
                                list.map((item, index) => {
                                    const activeIndex = currentActiveIndex === index ? true : false
                                    const activeClass = activeIndex ? `active` : ``
                                    const rotate = (index * perAngle)

                                    return (
                                        <React.Fragment key={index}>
                                            <div
                                                style={{
                                                    top: 0,
                                                    left: 0,
                                                    margin: 12,
                                                    width: cardWidth,
                                                    height: cardHeight,
                                                    backgroundColor: `var(--foreground-color)`,
                                                    position: `absolute`,
                                                    transition: `transform 0.25s linear`,
                                                    transform: `rotateY(${rotate}deg) translateZ(${radius}px)`,
                                                }}
                                                className={`custom-carousel-item ${activeClass}`}
                                                {...props}>
                                                {display({ item, index })}
                                            </div>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={`custom-carousel-direction-container`}>
                    <RoundButton
                        role={`button`}
                        disabled={currentActiveIndex === 0}
                        style={{
                            opacity: currentActiveIndex === 0 ? 0.5 : 1,
                            position: `absolute`,
                            top: `50%`,
                            left: 0,
                            transform: `translateY(-50%)`
                        }}
                        onClick={moveLeft}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </RoundButton>
                    <RoundButton
                        role={`button`}
                        disabled={currentActiveIndex === (list.length - 1)}
                        style={{
                            opacity: currentActiveIndex === (list.length - 1) ? 0.5 : 1,
                            position: `absolute`,
                            top: `50%`,
                            right: 0,
                            transform: `translateY(-50%)`
                        }}
                        onClick={moveRight}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </RoundButton>
                </div>
            </div>
        </>
    )
}

ThreeDeeCarousel.propTypes = {
    list: PropTypes.array.isRequired,
    display: PropTypes.func.isRequired,
    defaultIndex: PropTypes.number,
    cardHeight: PropTypes.number,
    cardWidth: PropTypes.number,
}