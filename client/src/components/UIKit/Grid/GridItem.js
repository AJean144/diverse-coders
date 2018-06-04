import styled from 'styled-components'

const GridItem = styled.div`
    min-width: 0;
    width: 100%;
    ${props => props.gridCol && `grid-column: span ${props.gridCol};`}
    ${props => props.textAlign && `text-align: ${props.textAlign};`}
    ${props => props.fontFamily && `font-family: ${props.fontFamily};`}
    ${props => props.fontSize && `font-size: ${props.fontSize};`}
    ${props => props.fontColor && `color: ${props.fontColor};`}
    ${props => props.fontWeight && `font-weight: ${props.fontWeight};`}
`

export default GridItem