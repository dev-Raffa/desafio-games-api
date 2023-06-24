import * as typeTheme from '@/types/theme';
import * as layoutTypes from '@/types/layout';
import { MouseEventHandler } from 'react';

type variant =
  | 'default'
  | 'outline'
  | 'circle'
  | 'circle-outline'
  | 'switch'
  | 'text';

interface buttonStyle {
  color?: keyof typeTheme.colors;
  bgcolor: keyof typeTheme.colors | string;
  height: keyof typeTheme.sizes | string;
  minWidth?: string;
  hover?: boolean;
  animation?: layoutTypes.animation;
}

export interface buttonProps extends buttonStyle {
  id: string;
  arialabel?: string;
  children?: layoutTypes.children;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface buttonStyleProps extends buttonStyle {
  variant: variant;
}
