import * as React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Howl } from 'howler'

import { RoundButton } from 'Components/Button'

const swipeSound = new Howl({
    src: "/sounds/swipe.mp3"
})

export const RecklessCarousel = ({
    list = [],
    display,
    overflowDisplay,
    defaultIndex = 0,
    onClick,
    overflowHeight = 65,
    overflowWidth = 600,
    cardHeight = 300,
    cardWidth = 300,
    ...props
}) => {
    const [currentActiveIndex, setCurrentActiveIndex] = React.useState(defaultIndex)

    const setActiveIndex = ({ event, index: activeIndex, item }) => {
        setCurrentActiveIndex(activeIndex)
        if (onClick) onClick({ event, activeIndex, item })
    }

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

    const prepareItemStyles = ({ index }) => {
        const PREVIOUS_TWO = currentActiveIndex === index - 2
        const PREVIOUS = currentActiveIndex === index - 1
        const CURRENT = currentActiveIndex === index
        const NEXT = currentActiveIndex === index + 1

        if (PREVIOUS_TWO) {
            return {
                opacity: 0.7,
                transform: `translateX(80px) scale(0.7, 0.7)`,
            }
        }

        if (PREVIOUS) {
            return {
                opacity: 0.8,
                transform: `translateX(50px) scale(0.8, 0.8)`,
            }
        }

        if (CURRENT) {
            return {
                opacity: 1,
                transform: `translateX(0) scale(1, 1)`
            }
        }

        if (NEXT) {
            return {
                opacity: 0,
                transform: `translateX(-100px) scale(1.3, 1.3)`,
            }
        }

        return {
            opacity: (1 - index / list.length)
        }
    }

    const prepareOverflowStyle = ({ index }) => {
        const PREVIOUS = currentActiveIndex === index - 1
        const CURRENT = currentActiveIndex === index
        const NEXT = currentActiveIndex === index + 1

        if (PREVIOUS) {
            return { transform: `translateY(${overflowHeight * index}px)` }
        }

        if (CURRENT) {
            return { transform: `translateY(${-overflowHeight * index}px)` }
        }

        if (NEXT) {
            return { transform: `translateY(${-overflowHeight * index}px)` }
        }

        return {}
    }

    const OverflowContent = (
        <>
            {
                overflowDisplay && (
                    <div
                        style={{
                            width: overflowWidth,
                            marginBottom: 12,
                        }}
                        className="custom-carousel-overflow-container">
                        <div
                            style={{
                                height: overflowHeight,
                                overflow: `hidden`,
                            }}
                            className="custom-carousel-overflow-list">
                            {
                                list.map((item, index) => {
                                    const activeIndex = currentActiveIndex === index
                                    const styles = prepareOverflowStyle({ index })
                                    const zIndex = (list.length - index) + (activeIndex ? (list.length + 1) : 0)
                                    const activeClass = activeIndex ? `active` : ``

                                    return (
                                        <React.Fragment key={index}>
                                            <div
                                                style={{
                                                    zIndex,
                                                    borderRadius: 12,
                                                    height: overflowHeight,
                                                    backgroundColor: `var(--foreground-color)`,
                                                    color: `var(--primary-color)`,
                                                    transition: `all ease-in-out 0.25s`,
                                                    willChange: `transform`,
                                                    paddingLeft: 6,
                                                    paddingRight: 6,
                                                    ...styles
                                                }}
                                                className={`carsousel-overflow-item ${activeClass}`}>
                                                {overflowDisplay({ item, index })}
                                            </div>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }
        </>
    )

    const CarouselContent = (
        <>
            <div
                style={{
                    display: `flex`,
                    flex: 1,
                    height: cardHeight,
                    width: cardWidth
                }}
                className="custom-carousel-container">
                <div
                    style={{
                        display: `flex`,
                        flex: 1,
                        position: `relative`
                    }}
                    className="custom-carousel-list">
                    {
                        list.map((item, index) => {
                            const activeIndex = currentActiveIndex === index
                            const zIndex = (list.length - index) + (activeIndex ? (list.length + 1) : 0)
                            const styles = prepareItemStyles({ index })
                            const activeClass = activeIndex ? `active` : ``

                            return (
                                <React.Fragment key={index}>
                                    <div
                                        onKeyDown={() => {}}
                                        onClick={(event) => setActiveIndex({ event, index, item })}
                                        style={{
                                            position: `absolute`,
                                            willChange: `transform`,
                                            transition: `all 0.25s ease-in-out`,
                                            zIndex,
                                            ...styles
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
        </>
    )

    return (
        <>
            <div
                style={{
                    position: `relative`
                }}>
                { OverflowContent }
                { CarouselContent }
                <div className={`custom-carousel-direction-container`}>
                    <RoundButton
                        role={`button`}
                        disabled={currentActiveIndex === 0}
                        style={{
                            opacity: currentActiveIndex === 0 ? 0.5 : 1,
                            position: `absolute`,
                            top: `calc(50% + 50px)`,
                            right: 0,
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

RecklessCarousel.propTypes = {
    list: PropTypes.array.isRequired,
    display: PropTypes.func.isRequired,
    overflowDisplay: PropTypes.func,
    overflowHeight: PropTypes.any,
    overflowWidth: PropTypes.any,
    defaultIndex: PropTypes.number,
    cardHeight: PropTypes.number,
    cardWidth: PropTypes.number,
}