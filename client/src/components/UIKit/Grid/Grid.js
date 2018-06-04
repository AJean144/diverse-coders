import styled from 'styled-components'
import { theme } from '../../../config/theme'

const Grid = styled.div`
    display: grid;
    ${props => props.gap && `grid-gap: ${props.gap};`}
    ${props => props.cols && `grid-template-columns: repeat(${props.cols}, minmax(0, 1fr));`}


    ${props => props.padding && `padding: ${props.padding};`}
    ${props => props.bgColor && `background: ${props.bgColor};`}
    ${props => props.textColor && `color: ${props.textColor};`}
    ${props => props.fixed && `position: fixed;`}
    ${props => props.dropShadow && `box-shadow: ${theme.boxShadow.extraDark};`}
    ${props => props.alignItems && `align-items: ${theme.alignItems};`}
`

export default Grid