import styled from 'styled-components'

const SuperText = styled.h1`
    font-size: 6rem;
    font-weight: 800;
    margin: 0;
    ${props => props.color && `color: ${props.color};`}
    ${props => props.fontFamily && `font-family: ${props.fontFamily};`}
`

export default SuperText