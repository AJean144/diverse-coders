import { css } from 'styled-components';
import Color from 'color';

import { theme } from '../config/theme';

export const actionFocus = () =>
  css`
    outline: none;

    &:focus {
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    }
  `;

export const breakpoints = Object.keys(theme.breakpoints).reduce(
  (accumulator, label) => {
    Object.assign(accumulator, {
      [label]: (...args) => css`
        @media (min-width: ${theme.breakpoints[label]}) {
          ${css(...args)};
        }
      `,
    });

    return accumulator;
  },
  {}
);

export const darken = (color: string, percentage: number) =>
  Color(color)
    .darken(percentage)
    .hsl()
    .string();

export const lighten = (color: string, percentage: number) =>
  Color(color)
    .lighten(percentage)
    .hsl()
    .string();

export const noSelect = () =>
  css`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `;

export const stretch = () =>
  css`
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  `;

export const truncate = (width: string) =>
  `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: ${width};
  `;

export const resetButtonStyles = () =>
  `
    background-color: transparent;
    border: 0;
    padding: 0;
  `;