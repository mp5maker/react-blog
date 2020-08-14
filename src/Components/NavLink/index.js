import React from 'react'
import { Link } from 'gatsby'

const hasWindow = typeof window !== undefined

export const NavLink = ({ onMouseEnter, onMouseLeave, children, borderRadius, ...props } = {}) => {
    const mouseEnter = React.useCallback((event) => {
        const { width, height } = event.target.getBoundingClientRect()
        if (hasWindow) {
            document.documentElement.style.setProperty('--cursor-inner-width', `${width}px`)
            document.documentElement.style.setProperty('--cursor-inner-height', `${height}px`)
            document.documentElement.style.setProperty('--cursor-inner-border-radius', `${borderRadius ? borderRadius : `20px`}`)
            document.documentElement.style.setProperty('--cursor-outer-width', `${width}px`)
            document.documentElement.style.setProperty('--cursor-outer-height', `${height}px`)
            document.documentElement.style.setProperty('--cursor-outer-border-radius', `${borderRadius ? borderRadius : `20px`}`)
        }
        if (onMouseEnter) onMouseEnter(event)
    }, [onMouseEnter, borderRadius])

    const mouseLeave = React.useCallback((event) => {
        if (hasWindow) {
            document.documentElement.style.setProperty('--cursor-inner-width', `10px`)
            document.documentElement.style.setProperty('--cursor-inner-height', `10px`)
            document.documentElement.style.setProperty('--cursor-inner-border-radius', `50%`)
            document.documentElement.style.setProperty('--cursor-outer-width', `40px`)
            document.documentElement.style.setProperty('--cursor-outer-height', `40px`)
            document.documentElement.style.setProperty('--cursor-outer-border-radius', `50%`)
        }
        if (onMouseLeave) onMouseLeave(event)
    }, [onMouseLeave])

    return props.href ? (
        <a
            role={`button`}
            tabIndex={0}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            {...props}>
            { children }
        </a>
    ) : (
        <Link
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            {...props}>
            {children}
        </Link>
    )
}