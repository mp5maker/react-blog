import React from 'react'

export const useDimension = () => {
    const [width, setWidth] = React.useState(window && window.innerWidth)
    const [height, setHeight] = React.useState(window && window.innerHeight)

    React.useEffect(() => {
        const onWindowResize = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }
        window && window.addEventListener('resize', onWindowResize)
        return () => window && window.removeEventListener('resize', onWindowResize)
    }, [])

    return { width, height }
}