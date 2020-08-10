import React from 'react'

export const useScroll = () => {
    const [scroll, setScroll] = React.useState(0)

    React.useEffect(() => {
        const onWindowScroll = () => setScroll(window.scrollY)

        if (window) window.addEventListener('scroll', onWindowScroll)
        return () => {
            if (window) window.removeEventListener('scroll', onWindowScroll)
        }
    }, [])

    return scroll
}