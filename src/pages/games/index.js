import React from "react"
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import get from 'lodash/get'

import { Layout } from 'Components/Layout'
import { NavLink } from 'Components/NavLink'
import { ThreeDeeCarousel } from 'Components/Carousel/ThreeDee'
import { useDimension } from 'Hooks/UseDimension'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-gap: 10px;
    @media screen and (max-width: 1440px) {
        display: block;
    }
`

const GridItem = ({ to = '', children }) => {
    return (
        <NavLink
            borderRadius={`5px`}
            style={{
                cursor: `pointer`,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                minHeight: `300px`,
                textDecoration: `none`,
                backgroundColor: `var(--foreground-color)`,
                color: `var(--primary-color)`,
                boxShadow: `0 1px 15px 0 var(--box-shadow-small-color)`,
                marginBottom: 12
            }}
            to={to}>
            { children }
        </NavLink>
    )
}


export default function Home() {
    const { t } = useTranslation()
    const { width } = useDimension()

    const list = [
        { url: '/games/breakout', name: `BREAKOUT`, description: `Dx ball ?` },
        { url: '/games/zombie-run', name: `ZOMBIE_RUN`, description: `Dinasuar game in google ?` },
        { url: '', name: `COMING_SOON` },
        { url: '', name: `COMING_SOON` },
        { url: '', name: `COMING_SOON` },
        { url: '', name: `COMING_SOON` },
    ]

    return (
        <>
            <Layout page={`Games`}>
                {
                    width > 1440 ? (
                        <ThreeDeeCarousel
                            cardHeight={300}
                            cardWidth={300}
                            display={({ item, index }) => {
                                const name = get(item, 'name', '')
                                const url = get(item, 'url', '')
                                const description = get(item, 'description', '')

                                if (name && url) {
                                    return (
                                        <GridItem to={url}>
                                            <div>
                                                <div>
                                                    { t(name) }
                                                </div>
                                                <div
                                                    style={{
                                                        marginTop: 16
                                                    }}>
                                                    <small>
                                                        { description }
                                                    </small>
                                                </div>
                                            </div>
                                        </GridItem>
                                    )
                                }

                                return (
                                    <div
                                        style={{
                                            display: `flex`,
                                            justifyContent: `center`,
                                            alignItems: `center`,
                                            width: 300,
                                            height: 300,
                                            color: `var(--primary-color)`
                                        }}>
                                        { t(name) }
                                    </div>
                                )
                            }}
                            list={list} />
                    ) : (
                        <Grid>
                            {
                                list.map((item, index) => {
                                    const name = get(item, 'name', '')
                                    const url = get(item, 'url', '')
                                    return (
                                        <React.Fragment key={index}>
                                            <GridItem to={url}>
                                                {t(name)}
                                            </GridItem>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </Grid>
                    )
                }
            </Layout>
        </>
    )
}
