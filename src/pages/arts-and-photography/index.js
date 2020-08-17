import React from 'react'
import styled from 'styled-components'

import { Layout } from 'Components/Layout'

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    grid-auto-rows: 260px;
    grid-gap: 10px;
    @media screen and (max-width: 1440px) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
    }
`

const GridSpanOne = styled.div`
    grid-row-end: span 1;
    border-radius: 5px;
    margin: 5px;
    box-shadow: 0 1px 15px 0 var(--box-shadow-medium-color);
`
const GridSpanTwo = styled.div`
    grid-row-end: span 2;
    border-radius: 5px;
    margin: 5px;
    box-shadow: 0 1px 15px 0 var(--box-shadow-medium-color);
`

const GridContent = styled.div`
    position: relative;
    display: block;
`

const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
`

export default function ArtsAndPhotography() {
    return (
        <>
            <Layout page={`Arts And Photography`}>
                <GridContainer>
                    <GridSpanOne>
                        <GridContent>
                            <Image
                                src="/arts/mantra.jpg"
                                alt="" />
                        </GridContent>
                    </GridSpanOne>
                    <GridSpanTwo>
                        <GridContent>
                            <Image
                                src="/arts/polygon.jpg"
                                alt="" />
                        </GridContent>
                    </GridSpanTwo>
                    <GridSpanTwo>
                        <GridContent>
                            <Image
                                src="/arts/tribal.jpg"
                                alt="" />
                        </GridContent>
                    </GridSpanTwo>
                    <GridSpanTwo>
                        <GridContent>
                            <Image
                                src="/arts/bengali-word-one.png"
                                alt="" />
                        </GridContent>
                    </GridSpanTwo>
                    <GridSpanTwo>
                        <GridContent>
                            <Image
                                src="/arts/bengali-word-two.png"
                                alt="" />
                        </GridContent>
                    </GridSpanTwo>
                    <GridSpanTwo>
                        <GridContent>
                            <Image
                                src="/arts/bengali-word-three.png"
                                alt="" />
                        </GridContent>
                    </GridSpanTwo>
                    <GridSpanTwo>
                        <GridContent>
                            <Image
                                src="/arts/aristrocat.jpg"
                                alt="" />
                        </GridContent>
                    </GridSpanTwo>
                    <GridSpanOne>
                        <GridContent>
                            <Image
                                src="/arts/depression.jpg"
                                alt="" />
                        </GridContent>
                    </GridSpanOne>
                    <GridSpanTwo>
                        <GridContent>
                            <Image
                                src="/arts/kid.jpg"
                                alt="" />
                        </GridContent>
                    </GridSpanTwo>
                    <GridSpanTwo>
                        <GridContent>
                            <Image
                                src="/arts/pillow.jpg"
                                alt="" />
                        </GridContent>
                    </GridSpanTwo>
                    <GridSpanOne>
                        <GridContent>
                            <Image
                                src="/arts/television.jpg"
                                alt="" />
                        </GridContent>
                    </GridSpanOne>
                    <GridSpanTwo>
                        <GridContent>
                            <Image
                                src="/arts/bengali-word-three.png"
                                alt="" />
                        </GridContent>
                    </GridSpanTwo>
                    <GridSpanTwo>
                        <GridContent>
                            <Image
                                src="/arts/aristrocat.jpg"
                                alt="" />
                        </GridContent>
                    </GridSpanTwo>
                    <GridSpanTwo>
                        <GridContent>
                            <Image
                                src="/arts/bengali-word-two.png"
                                alt="" />
                        </GridContent>
                    </GridSpanTwo>
                    <GridSpanOne>
                        <GridContent>
                            <Image
                                src="/arts/depression.jpg"
                                alt="" />
                        </GridContent>
                    </GridSpanOne>
                    <GridSpanTwo>
                        <GridContent>
                            <Image
                                src="/arts/kid.jpg"
                                alt="" />
                        </GridContent>
                    </GridSpanTwo>
                </GridContainer>
            </Layout>
        </>
    )
}