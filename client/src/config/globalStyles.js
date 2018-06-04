import { injectGlobal } from 'styled-components';

import { lighten } from '../lib/styleUtils';

import { theme } from './theme';

const globalStyles = injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${theme.colors.main.base};
    color: ${theme.textColors.main};
    font-family: ${theme.fonts.family.base};
    font-size: ${theme.fonts.sizes.base};
    line-height: ${theme.fonts.lineHeight.base};
  }

  img {
    display: block;
    max-width: 100%;
  }

  ::-moz-selection { background: ${lighten(theme.colors.main.base, 0.6)}; }
  ::selection { background: ${lighten(theme.colors.main.base, 0.6)}; }

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: ${lighten(theme.textColors.base, 0.6)};
  }

  ::-moz-placeholder { /* Firefox 19+ */
    color: ${lighten(theme.textColors.base, 0.6)};
  }

  :-ms-input-placeholder { /* IE 10+ */
    color: ${lighten(theme.textColors.base, 0.6)};
  }

  :-moz-placeholder { /* Firefox 18- */
    color: ${lighten(theme.textColors.base, 0.6)};
  }

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    background-color: ${theme.colors.main.base};
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: ${theme.radius.base};
  }

  .tippy-tooltip-content {
    font-size: ${theme.fonts.sizes.s};
  }

  .floating-text-input {
    position: absolute;
    z-index: 10;
    width: 45px;
    border: 1px solid cornflowerblue;
    outline: none;
    pointer-events: none;
  }
`;

export default globalStyles;