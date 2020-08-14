import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import { DEVELOPMENT } from 'Constants/Settings'
import { ColorPalette } from 'Components/ColorPalette'
import { Messenger } from 'Components/Messenger'
import { Header } from 'Components/Header'
import { SEO } from 'Components/SEO'
import { Me } from 'Components/Me'
import { Footer } from 'Components/Footer'
import { MouseTracker } from 'Components/MouseTracker'
import { VolumeControl } from 'Components/VolumeControl'
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

const isDevelopment = process.env.NODE_ENV === DEVELOPMENT

export const Layout = ({ children, page = '' } = {}) => {
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
            <ColorPalette />
            {
                !isDevelopment && (
                    <Messenger />
                )
            }
            <MouseTracker />
            <VolumeControl />
        </>
    )
}