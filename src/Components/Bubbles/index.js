import React from 'react'

import './styles.scss'

export const Bubbles = () => {
    return (
        <div className="bubbles-container">
            <div
                style={{
                    left: -10,
                    top: Math.min(Math.floor(Math.random() * 30), 30)
                }}
                className="bubble-1"></div>
            <div
                style={{
                    right: -10,
                    top: Math.min(Math.floor(Math.random() * 30), 30)
                }}
                className="bubble-2"></div>
            <div
                style={{
                    left: -10,
                    bottom: Math.min(Math.floor(Math.random() * 30), 30)
                }}
                className="bubble-3"></div>
            <div
                style={{
                    right: -10,
                    bottom: Math.min(Math.floor(Math.random() * 30), 30)
                }}
                className="bubble-4"></div>
            <div
                style={{
                    left: Math.min(Math.floor(Math.random() * 30), 30),
                    top: Math.min(Math.floor(Math.random() * 50), 50)
                }}
                className="bubble-5"></div>
            <div
                style={{
                    right: Math.min(Math.floor(Math.random() * -100), -30),
                    top: Math.min(Math.floor(Math.random() * 50), 50)
                }}
                className="bubble-6"></div>
            <div
                style={{
                    left: Math.min(Math.floor(Math.random() * 30), 30),
                    bottom: Math.min(Math.floor(Math.random() * 50), 50)
                }}
                className="bubble-7"></div>
            <div
                style={{
                    right: Math.min(Math.floor(Math.random() * -100), -30),
                    bottom: Math.min(Math.floor(Math.random() * 50), 50)
                }}
                className="bubble-8"></div>
        </div>
    )
}