import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'gatsby'
import { useTranslation } from 'react-i18next'

import { Bubbles } from 'Components/Bubbles'
import './styles.scss'

export const Header = ({ title, page } = {}) => {
    const { t } = useTranslation()

    return (
        <header className={`header-container`}>
            <div className={`header-content-left`}>
                <div className={`icon`}>
                    <div>
                        <FontAwesomeIcon icon={faReact} />
                    </div>
                </div>
                <div className={`title`}>
                    <h1>
                        { title }
                    </h1>
                </div>
            </div>
            <div className="header-content-right">
                <ul>
                    <li>
                        <Link
                            activeClassName="active"
                            to={`/`}>
                            { t(`HOME`) }
                        </Link>
                        <Bubbles />
                    </li>
                    <li>
                        <Link
                            activeClassName="active"
                            to={`/about`}>
                            { t(`ABOUT_ME`) }
                        </Link>
                        <Bubbles />
                    </li>
                    <li>
                        <Link
                            activeClassName="active"
                            to={`/my-files`}>
                            { t(`FILES`) }
                        </Link>
                        <Bubbles />
                    </li>
                </ul>
            </div>
        </header>
    )
}