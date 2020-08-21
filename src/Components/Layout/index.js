import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import get from 'lodash/get'

import { Header } from 'Components/Header'
import { SEO } from 'Components/SEO'
import { Me } from 'Components/Me'
import { RecklessCarousel } from 'Components/Carousel/Reckless'
import { Footer } from 'Components/Footer'

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
                    <RecklessCarousel
                        cardWidth={250}
                        cardHeight={250}
                        overflowHeight={65}
                        overflowWidth={`100%`}
                        list={[
                            { name: 'Bengal Studio', url: `/arts/bengali-word-one.png`},
                            { name: 'Arts', url: `/arts/bengali-word-two.png`},
                            { name: 'Photography', url: `/arts/bengali-word-three.png`}
                        ]}
                        overflowDisplay={({ item, index }) => {
                            const name = get(item, 'name', '')
                            return (
                                <h6 style={{ height: 65, display: `flex`, alignItems: `center` }} >
                                    <strong>
                                        { name }
                                    </strong>
                                </h6>
                            )
                        }}
                        display={({ item, index }) => {
                            const url = get(item, 'url', '')

                            return (
                                <img
                                    width={200}
                                    height={300}
                                    alt=""
                                    src={url} />
                            )
                        }} />
                </Aside>
            </Grid>
            <Footer />
        </>
    )
}