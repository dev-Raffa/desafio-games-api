import { css } from 'styled-components';
import { breakPoint } from '@/types/layout';

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
