import React from 'react'

import "./styles.scss"

export const Card = ({ children }) => {
    return (
        <>
            <article className="card-container">
                { children }
            </article>
        </>
    )
}