import React from 'react'
import { Howler } from 'howler'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

import { ON, OFF } from 'Constants/Settings'
import { SoundContext } from 'Contexts/SoundContext'
import { RoundButton } from 'Components/Button'
import { NavLink } from 'Components/NavLink'
import './styles.scss'

export const VolumeControl = () => {
    const { t } = useTranslation()
    const { sound, setSound } = React.useContext(SoundContext)
    const [mute, setMute] = React.useState(sound)

    const toggleMute = () => {
        if (mute) {
            Howler.mute(false)
            setSound(ON)
        } else {
            Howler.mute(true)
            setSound(OFF)
        }
        setMute(!mute)
    }

    React.useEffect(() => {
        if (sound === ON) Howler.mute(false)
        if (sound === OFF) Howler.mute(true)
    }, [sound])

    return (
        <React.Fragment>
            <div className="volume-control-container">
                <RoundButton
                    title={mute ? t(`INTERFACE_SOUND_ON`) : t(`INTERFACE_SOUND_OFF`)}
                    onClick={toggleMute}>
                    {
                        mute ? (
                            <FontAwesomeIcon icon={faVolumeMute} />
                        ) : (
                            <FontAwesomeIcon icon={faVolumeUp} />
                        )
                    }
                </RoundButton>
            </div>
            <div className="sound-attributon-container">
                Sound from
                &nbsp;
                <NavLink
                    borderRadius={`5px`}
                    target="_blank"
                    href="https://www.zapsplat.com">
                    Zapsplat.com
                </NavLink>
            </div>
        </React.Fragment>
    )
}