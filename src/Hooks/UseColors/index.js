import * as React from 'react'

import { Colors } from 'Constants/Colors'
import { PURPLE } from 'Constants/Settings'

export const useColors = ({ theme = PURPLE } = {}) => {
    React.useEffect(() => {
        if (typeof window === 'undefined' || !window.document) {
            return;
        } else {
            const root = document.documentElement
            root.style.setProperty('--background-color', Colors[theme].backgroundColor)
            root.style.setProperty('--foreground-color', Colors[theme].foregroundColor)
            root.style.setProperty('--primary-color', Colors[theme].primaryColor)
            root.style.setProperty('--secondary-color', Colors[theme].secondaryColor)
            root.style.setProperty('--box-shadow-small-color', Colors[theme].boxShadowSmallColor)
            root.style.setProperty('--box-shadow-medium-color', Colors[theme].boxShadowMediumColor)
        }
    }, [theme])

    return
}