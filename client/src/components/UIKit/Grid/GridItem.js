import styled from 'styled-components'

import { darken } from '../../../lib/styleUtils'

const GridItem = styled.div`
    min-width: 0;
    width: 100%;
    ${props => props.gridCol && `grid-column: span ${props.gridCol};`}
    ${props => props.textAlign && `text-align: ${props.textAlign};`}
    ${props => props.fontFamily && `font-family: ${props.fontFamily};`}
    ${props => props.fontSize && `font-size: ${props.fontSize};`}
    ${props => props.fontColor && `color: ${props.fontColor};`}
    ${props => props.fontWeight && `font-weight: ${props.fontWeight};`}
    ${props => props.link && `transition: 0.2s ease-in-out;`}

    :hover {
        ${props => props.link && `transition: 0.2s ease-in-out;`}
        ${props => props.link && `cursor: pointer;`}
        ${props => (props.link && props.fontColor) && `color: ${darken(props.fontColor, 0.2)};`}
    }
`

export default GridItem