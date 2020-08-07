import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { I18nextProvider } from 'react-i18next';
import styled from 'styled-components'

import { PURPLE } from 'Constants/Settings'
import { Header } from 'Components/Header'
import { SEO } from 'Components/SEO'
import { Me } from 'Components/Me'
import { Footer } from 'Components/Footer'
import { useColors } from 'Hooks/UseColors'
import i18n from 'Locales/i18n'
import "./styles.scss"

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto 400px;
    grid-template-rows: auto;
    @media only screen and (max-width: 767px) {
        grid-template-columns: auto;
    }
`

const Aside = styled.aside`
    @media only screen and (max-width: 767px) {
        display: none;
    }
`

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
                <Grid className="container-fluid">
                    <main className="layout-container">
                        <div className={`layout`}>
                            {children}
                        </div>
                    </main>
                    <Aside>
                        <Me />
                    </Aside>
                </Grid>
                <Footer />
            </I18nextProvider>
        </>
    )
}