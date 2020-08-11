import React from 'react'

const hasWindow = typeof window !== 'undefined'

export const useMedia = (query) => {
    const [matches, setMatches] = React.useState(hasWindow && window.matchMedia(query).matches)

    React.useEffect(() => {
        if (hasWindow) {
            const media = window.matchMedia(query)
            const onMediaChange = () => setMatches(media.matches)
            media.addListener(onMediaChange)
            return () => window && media.removeListener(onMediaChange)
        }

    }, [query])

    return matches
}