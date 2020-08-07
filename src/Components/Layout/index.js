import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import { Header } from 'Components/Header'
import { SEO } from 'Components/SEO'
import { Footer } from 'Components/Footer'
import { useColors } from 'Hooks/UseColors'
import "./styles.scss"

export const Layout = ({ children, page = '' } = {}) => {
    useColors({ theme: 'light' })

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
            <main className="container-fluid">
                <div className="layout-container">
                    <div className={`layout`}>
                        { children }
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}