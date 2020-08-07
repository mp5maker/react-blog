import React from 'react'
import { useTranslation } from 'react-i18next'

import './styles.scss'

export const Me = () => {
    const { t } = useTranslation()

    return (
        <div className={`about-me-container`}>
            <div className={`image`}>
                <img src="/ok.png" alt={``} width={140} height={222} />
            </div>
            <div className={`description`}>
                <div>
                    {t(`I_AM_A`)} <strong>{t(`SENIOR_SOFTWARE_ENGINEER`)}</strong>
                </div>
                <div>
                    {t(`I_HAVE_PASSION_FOR_UI_UX_ANIMATIONS_AND_LOVE_TO_CREATE`)}
                    {t(`WEBSITES_TO_RUN_ACROSS_MULTIPLE_DEVICES_WITH`)}
                </div>
                <div>
                    <strong>
                        {t(`DYNAMIC_USER_EXPERIENCES`)}
                    </strong>
                </div>
            </div>
        </div>
    )
}
