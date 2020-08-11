import React from 'react'
import * as THREE from 'three'
import get from 'lodash/get'

import { Colors } from 'Constants/Colors'
import { ThemeContext } from 'Contexts/ThemeContext'

export const useThreeColors = () => {
    const { theme } = React.useContext(ThemeContext)
    const [colors, setColors] = React.useState(null)

    React.useEffect(() => {
        if (theme) {
            const themeColors = get(Colors, theme, {})
            const preparedColors = Object.keys(themeColors).reduce((allColors, perColor) => {
                return {
                    ...allColors,
                    [perColor]: new THREE.Color(themeColors[perColor])
                }
            }, {})
            setColors(preparedColors)
        }
    }, [theme])

    return colors
}