import styled from 'styled-components'

export const RoundButton = styled.button`
    border-radius: 50%;
    background-color: var(--foreground-color);
    color: var(--primary-color);
    width: 40px;
    height: 40px;
    border: none;
    box-shadow: 0 1px 15px 0 var(--box-shadow-small-color);
    transition: 0.25s box-shadow ease-in-out;
    outline: none !important;
    &:active {
        outline: none !important;
        border: 1px solid var(--secondary-color);
    }
    &:hover {
        box-shadow: 0 1px 15px 0 var(--box-shadow-medium-color);
        transition: 0.25s box-shadow ease-in-out;
    }
    &.active {
        border: 1px solid var(--primary-color);
    }
`