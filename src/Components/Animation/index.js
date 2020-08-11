import React from 'react'

import { Animation as UtilityAnimation } from 'Utilities/Animation'

export const Animation = ({ width, height, onAnimation }) => {
    const canvasRef = React.useRef()

    React.useEffect(() => {
        if (canvasRef.current) {
            const animation = new UtilityAnimation({ canvas: canvasRef.current })
            if (onAnimation) onAnimation({ animation })
        }

    }, [canvasRef, onAnimation])

    return (
        <canvas
            width={width}
            height={height}
            ref={canvasRef}>
        </canvas>
    )
}