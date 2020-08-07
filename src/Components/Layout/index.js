import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { I18nextProvider } from 'react-i18next';

import { PURPLE } from 'Constants/Settings'
import { Header } from 'Components/Header'
import { SEO } from 'Components/SEO'
import { Footer } from 'Components/Footer'
import { useColors } from 'Hooks/UseColors'
import i18n from 'Locales/i18n'
import "./styles.scss"

export const Layout = ({ children, page = '' } = {}) => {
    useColors({ theme: PURPLE })

    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )

    return (
        <>
            <I18nextProvider i18n={i18n}>
                <SEO />
                <Header
                    page={page}
                    title={data.site.siteMetadata.title} />
                <main className="container-fluid">
                    <div className="layout-container">
                        <div className={`layout`}>
                            { children }
                        </div>
                    </div>
                </main>
                <Footer />
            </I18nextProvider>
        </>
    )
}