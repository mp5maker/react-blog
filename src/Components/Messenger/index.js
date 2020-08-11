import React from 'react'

import { Colors } from 'Constants/Colors'
import { ThemeContext } from 'Contexts/ThemeContext'
import "./styles.scss"

const hasWindow = typeof window !== 'undefined'

export const Messenger = () => {
    const { theme } = React.useContext(ThemeContext)

    const setFbAsyncInit = React.useCallback(() => {
        if (hasWindow) {
            window.fbAsyncInit = function () {
                window.FB.init({
                    xfbml: true,
                    version: 'v8.0'
                });
            };
        }
    }, [])

    const loadSDKAsynchronously = React.useCallback(() => {
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'))
    }, [])

    const removeFacebookSDK = React.useCallback(() => {
        const removeElementByIds = (ids) => {
            ids.forEach((id) => {
                const element = document.getElementById(id)
                if (element && element.parentNode) element.parentNode.removeChild(element)
            })
        }

        removeElementByIds(['facebook-jssdk', 'fb-root'])
        if (hasWindow) delete window.FB
    }, [])

    const createMarkUp = React.useCallback(() => {
        return {
            __html: `
                <div
                    cross-origin="anonymous"
                    class="fb-customerchat"
                    attribution="setup_tool"
                    page_id="219752789460470"
                    theme_color="${Colors[theme].backgroundColor}"
                    logged_in_greeting="Hi! Welcome to my blog."
                    logged_out_greeting="Hi! Welcome to my blog.">
            `
        }
    }, [theme])

    React.useEffect(() => {
        if (hasWindow) {
            setFbAsyncInit()
            loadSDKAsynchronously()
            removeFacebookSDK()
        }

        return () => {
            if (hasWindow && window.FB !== undefined) window.FB.CustomerChat.hide()
        }
    }, [setFbAsyncInit, theme, loadSDKAsynchronously, removeFacebookSDK])

    return (
        <div key={new Date()} dangerouslySetInnerHTML={createMarkUp()} />
    )
}