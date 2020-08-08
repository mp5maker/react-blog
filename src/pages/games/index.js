import React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Layout } from 'Components/Layout'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-gap: 10px;
`

const GridItem = ({ to = '', children }) => {
    return (
        <Link
            style={{
                cursor: `pointer`,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                minHeight: `250px`,
                boxShadow: `0 1px 15px 0 var(--box-shadow-small-color)`
            }}
            to={to}>
            { children }
        </Link>
    )
}


export default function Home() {
    return (
        <>
            <Layout page={`Games`}>
                <Grid>
                    <GridItem
                        to={`/games/dx-ball`}>
                        Dx Ball
                    </GridItem>
                    <GridItem
                        to={`/games/dinasaur`}>
                        Dinausaur
                    </GridItem>
                    <GridItem
                        to={`/games/ultraman`}>
                        Ultraman
                    </GridItem>
                    <GridItem
                        to={`/games/lungi-maja`}>
                        Lungi Maja
                    </GridItem>
                </Grid>
            </Layout>
        </>
    )
}
