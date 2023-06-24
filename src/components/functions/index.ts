import { css, keyframes } from 'styled-components';
import type { animation, hover, target, breakPoint } from '@/types/layout';
import * as themeTypes from '@/types/theme';
import { DefaultTheme } from 'styled-components';
import { Opacity } from '../animations';

export const getAlignY = (alignY: string) => {
  switch (alignY) {
    case 'top': {
      return css`
        align-items: flex-start;
      `;
    }
    case 'center': {
      return css`
        align-items: center;
      `;
    }
    case 'botton': {
      return css`
        align-items: flex-end;
      `;
    }
  }
};
export const getAlignX = (alignX: string) => {
  switch (alignX) {
    case 'left': {
      return css`
        justify-content: flex-start;
      `;
    }
    case 'center': {
      return css`
        justify-content: center;
      `;
    }
    case 'right': {
      return css`
        justify-content: flex-end;
      `;
    }
    case 'around': {
      return css`
        justify-content: space-around;
      `;
    }
    case 'between': {
      return css`
        justify-content: space-between;
      `;
    }
  }
};
export const getColumns = (
  columns: string | number,
  columnsMinMaxSize?: string
) => {
  return typeof columns === 'number'
    ? css`
        grid-template-columns: repeat(${columns}, 1fr);
      `
    : css`
        grid-template-columns: ${columnsMinMaxSize};
      `;
};

export const getRows = (rows: string | number, rowsMinMaxSize?: string) => {
  return typeof rows === 'number'
    ? css`
        grid-template-rows: repeat(${rows}, 1fr);
      `
    : css`
        grid-template-rows: minmax(${rowsMinMaxSize});
      `;
};

export const getAnimation = ({ from, to, title }: animation) => {
  return title
    ? css`
        @keyframes ${title} {
          from {
            ${from}
          }
          to {
            ${to}
          }
        }
      `
    : keyframes`
      from{
        ${from}
      }
      to{
        ${to}
      }
    `;
};

export const getHover = ({ after, before, comands }: hover) => {
  return css`
    ${before &&
    css`
      ::before {
        ${before}
      }
    `}
    ${after &&
    css`
      ::after {
        ${after}
      }
    `}
    :hover${before && '::before'}${after && '::after'} {
      ${comands}
    }
  `;
};

export const getColorOutline = (
  color: keyof themeTypes.colors,
  theme: DefaultTheme
) => {
  switch (color) {
    case 'dark': {
      return css`
        color: ${theme.title === 'Dark'
          ? `white`
          : theme.buttons.colors[color]};
      `;
    }
    case 'light': {
      return css`
        color: ${theme.title === 'Light'
          ? `dark`
          : theme.buttons.colors[color]};
      `;
    }
    default: {
      return css`
        color: ${theme.buttons.colors[color]};
      `;
    }
  }
};

export const getTarget = ({
  id,
  comands,
  before,
  after,
  animation
}: target) => {
  const objId = '#' + id;

  function getanimation(variant: 'opacity' | undefined) {
    switch (variant) {
      case 'opacity': {
        return Opacity;
      }
    }
  }
  return css`
    &&${objId}:target {
      ${comands}
      ${animation &&
      css`
        animation: ${getanimation(animation.variant)} ${animation?.time}
          ${animation?.delay};
      `}
    }
    ${before &&
    css`
      &&${objId}:target::before {
        ${before}
      }
    `}
    ${after &&
    css`
      &&${objId}:target::after {
        ${after}
      }
    `}
  `;
};

export const getNotTarget = ({ id, comands }: target) => {
  const objId = '#' + id;

  return css`
    &&${objId}:not(:target) {
      ${comands}
    }
  `;
};

export const getBreakPoints = (breakpoints: Array<breakPoint>) => {
  return breakpoints.map(({ sizes, comands }) => {
    if (sizes.maxWidth && sizes.minWidth) {
      return css`
        @media screen and (max-width: ${sizes.maxWidth}) and (min-width: ${sizes.minWidth}) {
          ${comands}
        }
      `;
    } else if (sizes.maxWidth) {
      return css`
        @media screen and (max-width: ${sizes.maxWidth}) {
          ${comands}
        }
      `;
    } else if (sizes.minWidth) {
      return css`
        @media screen and (min-width: ${sizes.minWidth}) {
          ${comands}
        }
      `;
    }
  });
};
