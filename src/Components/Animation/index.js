import React from 'react'

import { Animation as UtilityAnimation } from 'Utilities/Animation'

export const Animation = ({ width = '99%', height = '100%', onAnimation }) => {
    const canvasRef = React.useRef()

    React.useEffect(() => {
        if (canvasRef.current) {
            const animation = new UtilityAnimation({ canvas: canvasRef.current })
            if (onAnimation) onAnimation({ animation })
        }

    }, [canvasRef])

    return (
        <canvas
            style={{
                width,
                height
            }}
            ref={canvasRef}>
        </canvas>
    )
}