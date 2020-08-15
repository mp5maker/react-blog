import React from 'react'
import { Howl } from 'howler'
import { Link } from 'gatsby'

const hasWindow = typeof window !== undefined

const mouseClickSound = new Howl({
    src: '/sounds/mouse-click.mp3',
});

const mouseHoverSound = new Howl({
    src: '/sounds/mouse-hover.mp3',
});

const customCursorSize = ({ borderRadius, width, height }) => {
    document.documentElement.style.setProperty('--cursor-inner-width', `${width}px`)
    document.documentElement.style.setProperty('--cursor-inner-height', `${height}px`)
    document.documentElement.style.setProperty('--cursor-inner-border-radius', `${borderRadius ? borderRadius : `20px`}`)
    document.documentElement.style.setProperty('--cursor-outer-width', `${width}px`)
    document.documentElement.style.setProperty('--cursor-outer-height', `${height}px`)
    document.documentElement.style.setProperty('--cursor-outer-border-radius', `${borderRadius ? borderRadius : `20px`}`)
}


const normalCursorSize = () => {
    document.documentElement.style.setProperty('--cursor-inner-width', `10px`)
    document.documentElement.style.setProperty('--cursor-inner-height', `10px`)
    document.documentElement.style.setProperty('--cursor-inner-border-radius', `50%`)
    document.documentElement.style.setProperty('--cursor-outer-width', `40px`)
    document.documentElement.style.setProperty('--cursor-outer-height', `40px`)
    document.documentElement.style.setProperty('--cursor-outer-border-radius', `50%`)
    return
}

let timeout;

export const NavLink = ({ onMouseEnter, onMouseLeave, children, borderRadius, onClick, onKeyDown, ...props } = {}) => {
    const mouseEnter = React.useCallback((event) => {
        const { width, height } = event.target.getBoundingClientRect()
        if (hasWindow) {
            mouseHoverSound.play()
            if (timeout) clearTimeout(timeout)
            customCursorSize({ borderRadius, width, height })
            timeout = setTimeout(() => {
                normalCursorSize()
            }, 2000)
        }
        if (onMouseEnter) onMouseEnter(event)
    }, [onMouseEnter, borderRadius])

    const mouseLeave = React.useCallback((event) => {
        if (hasWindow) normalCursorSize()
        if (onMouseLeave) onMouseLeave(event)
    }, [onMouseLeave])

    const onMouseClick = React.useCallback((event) => {
        mouseClickSound.play()
        if (onClick) onClick(event)
    }, [onClick])

    const handleKeyDown = React.useCallback((event) => {
        if (onKeyDown) onKeyDown(event)
    }, [onKeyDown])

    return props.href ? (
        <a
            role={`button`}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onClick={onMouseClick}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            {...props}>
            { children }
        </a>
    ) : (
        <Link
            onKeyDown={handleKeyDown}
            onClick={onMouseClick}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            {...props}>
            {children}
        </Link>
    )
}