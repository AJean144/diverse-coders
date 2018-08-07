import styled from 'styled-components'

import { theme } from '../../../../config/theme'

const Container = styled.button`
    padding: ${theme.spacing.xs};
    font-size: ${theme.fonts.sizes.l}
    background: ${theme.colors.main.dark};
    color: ${theme.textColors.inverse};
    border-radius: ${theme.radius.base}
    border: none;
    box-shadow: ${theme.boxShadow.light};
    transition: 0.2s ease-in-out;

    :hover {
        transition: 0.2s ease-in-out;
        cursor: pointer;
        background-color: ${theme.colors.main.base};
        box-shadow: ${theme.boxShadow.dark};
        color: ${theme.textColors.link};
    }
`

export default Container