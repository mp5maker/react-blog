import React from 'react'

import { useMousePosition } from 'Hooks/UseMousePosition'
import { useDimension } from 'Hooks/UseDimension'
import './styles.scss'

const hasWindow = typeof window !== undefined

export const MouseTracker = () => {
    const { x: left, y: top } = useMousePosition()
    const { width, height } = useDimension()

    const leftCondition = left < 40 || left > width - 40
    const topCondition = top < 40 || top > height - 40

    React.useEffect(() => {
        if (hasWindow) {
            document.documentElement.style.setProperty('--cursor-inner-width', `10px`)
            document.documentElement.style.setProperty('--cursor-inner-height', `10px`)
            document.documentElement.style.setProperty('--cursor-inner-border-radius', `50%`)
            document.documentElement.style.setProperty('--cursor-outer-width', `40px`)
            document.documentElement.style.setProperty('--cursor-outer-height', `40px`)
            document.documentElement.style.setProperty('--cursor-outer-border-radius', `50%`)
        }
    }, [])

    return (
        <>
            <div
                style={{
                    top,
                    left,
                    ...(leftCondition || topCondition ? { display: `none` } : {})
                }}
                className="cursor-outer">
            </div>
            <div
                style={{
                    top,
                    left,
                    ...(leftCondition || topCondition ? { display: `none` } : {})
                }}
                className="cursor-inner">
            </div>
        </>
    )
}