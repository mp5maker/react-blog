import React from 'react'
import moment from 'moment'

import './styles.scss'

export const Footer = () => {
    return (
        <footer className={`footer-container`}>
            <div>
                {moment().format('YYYY')} &copy; Photon Enterprise. All Rights Reserved
            </div>
        </footer>
    )
}