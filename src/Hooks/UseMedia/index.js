import React from 'react'

export const useMedia = (query) => {
    const [matches, setMatches] = React.useState(window && window.matchMedia(query).matches)

    React.useEffect(() => {
        if (window) {
            const media = window.matchMedia(query)
            const onMediaChange = () => setMatches(media.matches)
            media.addListener(onMediaChange)
            return () => window && media.removeListener(onMediaChange)
        }

    }, [query])

    return matches
}