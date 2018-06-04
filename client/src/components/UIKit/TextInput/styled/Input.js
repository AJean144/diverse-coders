import styled from 'styled-components';

import { theme } from '../../../../config/theme';

const Input = styled.input`
  background-color: #ffffff;
  border: 0;
  border: ${theme.borderWidth} solid ${theme.colors.contrast.dark};
  border-radius: ${theme.radius.base};
  box-sizing: border-box;
  color: ${props =>
        props.theme === 'dark' ? theme.colors.contrast.dark : theme.colors.contrast.base};
  font-family: ${theme.fonts.family.base};
  font-size: ${theme.fonts.sizes.base};
  line-height: 1.2;
  padding: ${props =>
        props.size ? theme.spacing[props.size] : theme.spacing.s};
  transition: 0.3s ease-in-out;
  width: ${props => (props.width ? props.width : '100%')};

  &:focus {
    border-color: ${theme.textColors.link};
    outline: none;
  }

  ${props => props.disabled && `opacity: 0.5;`};
  ${props => props.iconLeft && `padding-left: ${theme.spacing.l};`};
  ${props => props.iconRight && `padding-right: ${theme.spacing.l};`};
`;

export default Input;
