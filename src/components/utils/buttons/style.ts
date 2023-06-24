'use client';

import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { buttonStyleProps } from './types';
import * as f from '@/components/functions';

function getBorderRadius(height: string) {
  switch (height) {
    case 'xs': {
      return css`
        border-radius: 0.5rem;
        padding: 0 0.5rem;
      `;
    }
    case 's': {
      return css`
        border-radius: 0.7rem;
        padding: 0 1rem;
      `;
    }
    case 'm': {
      return css`
        border-radius: 1rem;
        padding: 0 1rem;
      `;
    }
    case 'l': {
      return css`
        border-radius: 1.2rem;
        padding: 0 1rem;
      `;
    }
    case 'xl': {
      return css`
        border-radius: 1.5rem;
        padding: 0 1.5rem;
      `;
    }
  }
}
export const Button = styled.button<buttonStyleProps>`
  cursor: pointer;
  font-size: ${({ theme, height }) => theme.typography.sizes[height]}rem;
  transition: ${({ theme }) => theme.transition};
  ${({ animation }) =>
    animation
      ? css`
          animation: ${f.getAnimation(animation)} ${animation.delay}
            ${animation.direction} ${animation.duration} ${animation.repeat};
        `
      : ''}
  ${({ variant, hover, color, bgcolor, height, minWidth, theme }) => {
    switch (variant) {
      case 'default': {
        return css`
          height: ${theme.buttons.sizes.height[height]}rem;
          ${minWidth
            ? `min-width: ${theme.buttons.sizes.minWidth[minWidth]}rem;`
            : ''}
          border: none;
          background-color: ${bgcolor ? theme.buttons.colors[bgcolor] : bgcolor};
          ${getBorderRadius(height)}
          ${color == 'dark' && theme.title == 'Light'
            ? `color: white;`
            : color == 'light' && theme.title == 'Dark'
            ? 'color: black;'
            : `color: ${theme.typography.colors.primary};`}
            ${hover
            ? `:hover{
                background: ${transparentize(
                  0.5,
                  color ? theme.buttons.colors[color] : ''
                )};
              }`
            : ''}
        `;
      }
      case 'outline': {
        return css`
          height: ${theme.buttons.sizes.height[height]}rem;
          ${minWidth
            ? `min-width: ${theme.buttons.sizes.minWidth[minWidth]}rem;`
            : ''}
          background-color: transparent;
          border: 1px solid ${color ? theme.buttons.colors[color] : ''};
          color: ${color ? theme.buttons.colors[color] : ''};
          ${getBorderRadius(height)}
          ${hover
            ? `:hover{
                background-color: ${color ? theme.buttons.colors[color] : ''};
                border: none;
                ${
                  color == 'dark' && theme.title == 'Light'
                    ? `color: white;`
                    : color == 'light' && theme.title == 'Dark'
                    ? 'color: black;'
                    : `color: ${color ? theme.typography.colors[color] : ''}};`
                }
                }`
            : ''}
        `;
      }
      case 'circle': {
        const size = theme.buttons.sizes.height[height] ? theme.buttons.sizes.height[height] + 'rem': height
        return css`
          transition: ${theme.transitions};
          display: flex;
          align-content: center;
          justify-content: center;
          flex-wrap: wrap;
          border: none;
          border-radius: 50%;
          background-color: ${theme.buttons.colors[bgcolor] ? theme.buttons.colors[bgcolor] : bgcolor};
          height: ${size};
          width: ${size};
          ${color && f.getColorOutline(color, theme)}
          ${hover
            ? `:hover{
                background: ${transparentize(
                  0.5,
                  bgcolor ? theme.buttons.colors[bgcolor] : ''
                )}};
              }`
            : ''}
        `;
      }
      case 'circle-outline': {
        const size = theme.buttons.sizes.height[height] ? theme.buttons.sizes.height[height] + 'rem': height
        return css`
          display: flex;
          align-items: center;
          justify-content: center;
          height: ${size};
          width: ${size};
          background-color: transparent;
          border: 1px solid ${color && theme.buttons.colors[color]};
          border-radius: 50%;
          ${color && f.getColorOutline(color, theme)};
          ${hover &&
          `:hover{
            background-color: ${color && theme.buttons.colors[color]};
            border: none;
            ${
              color == 'dark' && theme.title == 'Light'
                ? `color: white;`
                : color == 'light' && theme.title == 'Dark'
                ? 'color: black;'
                : `color: ${theme.typography.colors.primary}};`
            }
          }`}
        `;
      }
      case 'switch': {
        return css``;
      }
      case 'text': {
        return css``;
      }
    }
  }}
`;
