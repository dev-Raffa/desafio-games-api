'use client';

import Link from 'next/link';
import styled, { css } from 'styled-components';
import { textLinkProps, textProps, titleProps} from './types';
import { getBreakPoints } from '../functions';

//@ts-ignore
export const Title = styled('h1').attrs<typogaphyStyles>(({ level }) => ({
  as: `h${level}`
}))<titleProps>`
  user-select:none;
  font-weight: ${({ weight }) => weight};
  text-decoration: ${({decoration})=> decoration};
  text-align: ${({ align }) => align};
  line-height: ${({lineheight})=>lineheight};
  ${({ color, theme }) =>
    color
      ? theme.typography.colors[color]
        ? `color:${theme.typography.colors[color]};`
        : `color:${color};`
      : ''};

  ${({ level, theme }) => {
    switch (level) {
      case '1': {
        return css`
          font-size: ${theme.typography.sizes.xl * 2}rem;
        `;
      }
      case '2': {
        return css`
          font-size: ${theme.typography.sizes.l * 1.5}rem;
        `;
      }
      case '3': {
        return css`
          font-size: ${theme.typography.sizes.m * 1.5}rem;
        `;
      }
      case '4': {
        return css`
          font-size: ${theme.typography.sizes.s * 1.5}rem;
        `;
      }
      case '5': {
        return css`
          font-size: ${theme.typography.sizes.xs * 1.5}rem;
        `;
      }
    }
  }}

  ${({breakpoints})=> breakpoints && getBreakPoints(breakpoints)}
`;

export const Text = styled.p<textProps>`
  user-select:none;
  text-decoration: ${({decoration})=> decoration};
  ${({ size, theme }) =>
    size && `font-size:${theme.typography.sizes[size]}rem;`}
  font-weight: ${({ weight }) => weight};
  text-align: ${({ align }) => align};
  margin: ${({margin}) => margin};
  ${({ color, theme }) =>
    color
      ? theme.typography.colors[color]
        ? `color:${theme.typography.colors[color]};`
        : `color:${color};`
      : ''};
  ${({breakpoints})=> breakpoints && getBreakPoints(breakpoints)}
`;

export const TextLink = styled(Link)<textLinkProps>`
  user-select:none;
  text-decoration: ${({decoration})=> decoration? decoration : 'none'};
  display: inline-block;
  ${({ size, theme }) =>
    size && `font-size:${theme.typography.sizes[size]}rem;`}
  line-height: ${({ lineheight }) => lineheight};
  font-weight: ${({ weight }) => weight};
  ${({ color, theme }) =>
    color
      ? theme.typography.colors[color]
        ? `color:${theme.typography.colors[color]};`
        : `color:${color};`
      : ''};
  ${({breakpoints})=> breakpoints && getBreakPoints(breakpoints)}
`;
