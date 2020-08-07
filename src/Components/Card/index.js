import React from 'react'

import "./styles.scss"

export const Card = ({ children }) => {
    return (
        <>
            <div className="card-container">
                { children }
            </div>
        </>
    )
}