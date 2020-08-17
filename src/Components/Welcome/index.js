import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'


const Container = styled.div`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
`

const FirstSection = styled.div`
    position: absolute;
    top: 50px;
    font-family: "Arigatou";
    animation: toRight 1s forwards ease-in-out;
    @keyframes toRight {
        0% {
            left: -1000px;
        } 100% {
            left: -500px;
        }
    }
`

const SecondSection = styled.div`
    position: absolute;
    top: 100px;
    font-family: "Arigatou";
    animation: toleft 1s forwards ease-in-out;
    @keyframes toleft {
        0% {
            left: 1000px;
        } 100% {
            left: 200px;
        }
    }
`


export const Welcome = () => {
    const { t } = useTranslation()

    return (
        <React.Fragment>
            <Container>
                <FirstSection>
                    <h2>
                        { t(`WELCOME_TO_MY`) }
                    </h2>
                </FirstSection>
                <SecondSection>
                    <h2>
                        { t(`BLOG`) }
                    </h2>
                </SecondSection>
            </Container>
        </React.Fragment>
    )
}