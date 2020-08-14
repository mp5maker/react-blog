import React from 'react'

const hasWindow = typeof window !== undefined

export const useKeyboard = () => {
    const [keyValue, setKeyValue] = React.useState('')
    const [keyCode, setKeyCode] = React.useState('')

    React.useState(() => {
        if (hasWindow) {
            const onWindowKeyDown = (event) => {
                setKeyValue(event.key)
                setKeyCode(event.keyCode)
            }

            const onWindowKeyUp = () => {
                setKeyValue("")
                setKeyCode("")
            }

            window.addEventListener('keydown', onWindowKeyDown)
            window.addEventListener('keyup', onWindowKeyUp)

            return () => {
                window.removeEventListener('keydown', onWindowKeyDown)
                window.removeEventListener('keyup', onWindowKeyUp)
            }
        }
    }, [])

    return { keyValue, keyCode }
}