import styled from 'styled-components';

import { theme } from '../../../../config/theme';

const IconRight = styled.div`
  display: flex;
  position: absolute;
  right: ${theme.spacing.s};
  top: 50%;
  transform: translateY(-50%);
`;

export default IconRight;
