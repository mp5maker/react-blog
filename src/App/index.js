import React from 'react'
import { I18nextProvider } from 'react-i18next'

import { ThemeContext } from 'Contexts/ThemeContext'
import { SoundContext } from 'Contexts/SoundContext'
import { StorageGet, StorageSet } from 'Utilities/Storage'
import { THEME, LIGHT, DARK, PURPLE, OFF, DEVELOPMENT } from 'Constants/Settings'
import { useColors } from 'Hooks/UseColors'
import { MouseTracker } from 'Components/MouseTracker'
import { VolumeControl } from 'Components/VolumeControl'
import { ColorPalette } from 'Components/ColorPalette'
import { Messenger } from 'Components/Messenger'
import i18n from 'Locales/i18n'

import 'bootstrap/dist/css/bootstrap.min.css';
import "Styles/global.scss"

export const App = (props) => {
    const isDevelopment = process.env.NODE_ENV === DEVELOPMENT
    const [theme, setTheme] = React.useState(PURPLE)
    const [sound, setSound] = React.useState(OFF)
    useColors({ theme })

    React.useEffect(() => {
        const onSuccess = ([currentTheme]) => {
            if (currentTheme === LIGHT
                || currentTheme === DARK
                || currentTheme === PURPLE) {
                setTheme(currentTheme)
            } else {
                setTheme(PURPLE)
                StorageSet({ key: THEME, value: PURPLE })
            }
        }

        Promise.all([
            StorageGet({ key: THEME }),
        ]).then(onSuccess)
    }, [])

    return (
        <I18nextProvider i18n={i18n}>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <SoundContext.Provider value={{ sound, setSound }}>
                    { props.children }
                    <ColorPalette />
                    <MouseTracker />
                    <VolumeControl />
                    {
                        !isDevelopment && (
                            <Messenger />
                        )
                    }
                </SoundContext.Provider>
            </ThemeContext.Provider>
        </I18nextProvider>
    )
}

export default ({ element }) => {
    return (
        <App>
            { element }
        </App>
    )
}