import React from 'react'

import { RoundButton } from 'Components/Button'
import { ThemeContext } from 'Contexts/ThemeContext'
import { LIGHT, DARK, PURPLE } from 'Constants/Settings'
import './styles.scss'

export const ColorPalette = () => {
    const { theme, setTheme } = React.useContext(ThemeContext)

    return (
        <React.Fragment>
            <div className="color-palette-container">
                <RoundButton
                    style={{
                        backgroundColor: `#FFFFFF`
                    }}
                    aria-label={`Changes the theme to light`}
                    className={theme === LIGHT ? `active` : ``}
                    title={`Light Theme Button`}
                    onClick={() => setTheme(LIGHT)}>
                </RoundButton>
                <RoundButton
                    style={{
                        backgroundColor: `#1A191A`
                    }}
                    aria-label={`Changes the theme to dark`}
                    className={theme === DARK ? `active` : ``}
                    title={`Dark Theme Button`}
                    onClick={() => setTheme(DARK)}>
                </RoundButton>
                <RoundButton
                    style={{
                        backgroundColor: `#1E1E61`
                    }}
                    aria-label={`Changes the theme to purple`}
                    className={theme === PURPLE ? `active` : ``}
                    title={`Purple Theme Button`}
                    onClick={() => setTheme(PURPLE)}>
                </RoundButton>
            </div>
        </React.Fragment>
    )
}