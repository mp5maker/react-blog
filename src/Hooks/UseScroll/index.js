import React from 'react'

const hasWindow = typeof window !== 'undefined'

export const useScroll = () => {
    const [scroll, setScroll] = React.useState(0)

    React.useEffect(() => {
        const onWindowScroll = () => setScroll(window.scrollY)

        if (hasWindow) window.addEventListener('scroll', onWindowScroll)
        return () => {
            if (hasWindow) window.removeEventListener('scroll', onWindowScroll)
        }
    }, [])

    return scroll
}