import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faHome, faUser, faFile } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'gatsby'

import './styles.scss'

export const Header = ({ title, page } = {}) => {
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
                        <Link to={`/`}>
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                    </li>
                    <li>
                        <Link to={`/about`}>
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </li>
                    <li>
                        <Link to={`/my-files`}>
                            <FontAwesomeIcon icon={faFile} />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}