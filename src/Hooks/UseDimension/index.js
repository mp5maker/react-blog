import React from 'react'

const hasWindow = typeof window !== 'undefined'

export const useDimension = () => {
    const [width, setWidth] = React.useState(hasWindow && window.innerWidth)
    const [height, setHeight] = React.useState(hasWindow && window.innerHeight)

    React.useEffect(() => {
        if (hasWindow) {
            const onWindowResize = () => {
                setWidth(window.innerWidth)
                setHeight(window.innerHeight)
            }
            hasWindow && window.addEventListener('resize', onWindowResize)
            return () => hasWindow && window.removeEventListener('resize', onWindowResize)
        }
    }, [])

    return { width, height }
}