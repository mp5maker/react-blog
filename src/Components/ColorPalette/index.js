import React from 'react'

import { RoundButton } from 'Components/Button'
import { ThemeContext } from 'Contexts/ThemeContext'
import { StorageSet } from 'Utilities/Storage'
import { LIGHT, DARK, PURPLE, THEME } from 'Constants/Settings'
import './styles.scss'

const noOfButtons = 3

export const ColorPalette = () => {
    const { theme, setTheme } = React.useContext(ThemeContext)
    const [multiplier, setMultiplier] = React.useState(null)
    const width = 100 / noOfButtons

    React.useEffect(() => {
        if (theme === LIGHT) setMultiplier(0)
        if (theme === DARK) setMultiplier(1)
        if (theme === PURPLE) setMultiplier(2)
    }, [theme])

    let buttonRadius = multiplier === 0 ? { borderBottomLeftRadius: 20 } : {}
    buttonRadius = multiplier === 1 ? {} : buttonRadius
    buttonRadius = multiplier === 2 ? { borderBottomRightRadius: 20 } : buttonRadius

    return (
        <React.Fragment>
            <div className="color-palette-container">
                <div className="color-palette-section">
                    <div className="button-section-container">
                        <div className={`button-section ${theme === LIGHT ? `active` : ``}`}>
                            <RoundButton
                                style={{
                                    backgroundColor: `#FFFFFF`
                                }}
                                aria-label={`Changes the theme to light`}
                                title={`Light Theme Button`}
                                onClick={() => {
                                    setMultiplier(0)
                                    setTheme(LIGHT)
                                    StorageSet({ key: THEME, value: LIGHT})
                                }}>
                            </RoundButton>
                        </div>
                        <div className={`button-section ${theme === DARK ? `active` : ``}`}>
                            <RoundButton
                                style={{
                                    backgroundColor: `#1A191A`
                                }}
                                aria-label={`Changes the theme to dark`}
                                title={`Dark Theme Button`}
                                onClick={() => {
                                    setMultiplier(1)
                                    setTheme(DARK)
                                    StorageSet({ key: THEME, value: DARK })
                                }}>
                            </RoundButton>
                        </div>
                        <div className={`button-section ${theme === PURPLE ? `active` : ``}`}>
                            <RoundButton
                                style={{
                                    backgroundColor: `#1E1E61`
                                }}
                                aria-label={`Changes the theme to purple`}
                                title={`Purple Theme Button`}
                                onClick={() => {
                                    setMultiplier(2)
                                    setTheme(PURPLE)
                                    StorageSet({ key: THEME, value: PURPLE })
                                }}>
                            </RoundButton>
                        </div>
                    </div>
                    <div
                        style={{
                            width: `${width}%`,
                            left: `calc(${(width * multiplier)}% + ${4 - (4 * multiplier)}px)`,
                            ...buttonRadius
                        }}
                        className="cut-out"></div>
                </div>
            </div>
        </React.Fragment>
    )
}