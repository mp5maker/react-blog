import React from 'react'
import { Howler } from 'howler'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

import { RoundButton } from 'Components/Button'
import { NavLink } from 'Components/NavLink'
import './styles.scss'

export const VolumeControl = () => {
    const { t } = useTranslation()
    const [mute, setMute] = React.useState(true)

    const toggleMute = () => {
        if (mute) Howler.mute(false)
        else Howler.mute(true)
        setMute(!mute)
    }

    React.useEffect(() => {
        Howler.mute(true)
    }, [])

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