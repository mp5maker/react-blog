import React from "react"

import { Layout } from 'Components/Layout'
import { Animation } from 'Components/Animation'


export default function Breakout() {
    const onAnimation = React.useCallback(({ animation }) => {
        const context = animation.getContext()

        const stage = function() {
            context.beginPath();
            context.rect(20, 40, 50, 50);
            context.fillStyle = "#FF0000";
            context.fill();
            context.closePath()
        }

        animation.setStage(stage)
        animation.start()
    }, [])

    return (
        <>
            <Layout page={`Games`}>
                <Animation onAnimation={onAnimation} />
            </Layout>
        </>
    )
}
