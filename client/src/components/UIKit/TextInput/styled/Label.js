import styled from 'styled-components';

import { theme } from '../../../../config/theme';

const Label = styled.label`
  font-family: ${theme.fonts.family.base};
  font-size: ${theme.fonts.sizes.s};
  font-weight: ${theme.fonts.weights.bold};

  ${props =>
        props.inline
            ? `margin-right: ${theme.spacing.s};`
            : `
      display: block;
      margin-bottom: ${theme.spacing.s};
    `};

  ${props => props.labelWidth && `min-width: ${props.labelWidth};`};
`;

export default Label;
