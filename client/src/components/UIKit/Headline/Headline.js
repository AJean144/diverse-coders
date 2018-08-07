import styled from 'styled-components'

import { theme } from '../../../config/theme'

const Headline = styled.span`
    font-size: ${theme.fonts.sizes.xl};
    ${props => props.fontFamily && `font-family: ${props.fontFamily};`}
`

export default Headline