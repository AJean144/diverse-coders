import styled from 'styled-components';

const Container = styled.svg`
  align-self: center;
  fill: ${props => (props.color ? props.color : 'currentColor')};
  display: inline-flex;
  vertical-align: middle;
`;

export default Container;
