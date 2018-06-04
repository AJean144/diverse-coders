import styled from 'styled-components'
import { theme } from '../../../config/theme'

const GridItem = styled.div`
    min-width: 0;
    width: 100%;
    ${props => props.gridCol && `grid-column: span ${props.gridCol};`}
`

export default GridItem