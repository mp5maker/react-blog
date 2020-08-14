import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { useTranslation } from 'react-i18next'

import { Bubbles } from 'Components/Bubbles'
import { NavLink } from 'Components/NavLink'
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
                        <NavLink
                            activeClassName="active"
                            to={`/`}>
                            { t(`HOME`) }
                        </NavLink>
                        <Bubbles />
                    </li>
                    <li>
                        <NavLink
                            activeClassName="active"
                            to={`/my-files`}>
                            { t(`FILES`) }
                        </NavLink>
                        <Bubbles />
                    </li>
                    <li>
                        <NavLink
                            activeClassName="active"
                            to={`/games`}>
                            { t(`GAMES`) }
                        </NavLink>
                        <Bubbles />
                    </li>
                    <li>
                        <NavLink
                            activeClassName="active"
                            to={`/models`}>
                            { t(`MODELS`) }
                        </NavLink>
                        <Bubbles />
                    </li>
                    <li>
                        <NavLink
                            activeClassName="active"
                            to={`/arts-and-photography`}>
                            {t(`ARTS_AND_PHOTOGRAPHY`)}
                        </NavLink>
                        <Bubbles />
                    </li>
                </ul>
            </div>
        </header>
    )
}