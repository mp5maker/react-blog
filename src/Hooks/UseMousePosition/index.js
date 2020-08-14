import React from 'react'

const hasWindow = typeof window !== undefined

export const useMousePosition = () => {
    const [x, setX] = React.useState(0)
    const [y, setY] = React.useState(0)

    React.useEffect(() => {
        if (hasWindow) {
            const onWindowMouseMove = (event) => {
                setX(event.clientX)
                setY(event.clientY)
            }

            window.addEventListener('mousemove', onWindowMouseMove)
            return () => {
                window.removeEventListener('mousemove', onWindowMouseMove)

            }
        }
    }, [])


    return { x, y }
}