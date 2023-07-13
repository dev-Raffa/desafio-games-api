import * as layoutTypes from '@/types/layout';
import * as themeTypes from '@/types/theme';

export interface styledInput {
  alignx?: layoutTypes.alignX;
  aligny?: layoutTypes.alignY;
  height?: string;
  minheight?: string;
  maxheight?: string;
  width?: string;
  maxwidth?: string;
  minwidth?: string;
  bgcolor?: keyof themeTypes.colorsBase | string;
  fontsize?: keyof themeTypes.sizes | string;
  fontcolor?: keyof themeTypes.colors | string;
  margin?: string;
  padding?: string;
  gap?: string;
  border?: string;
  borderradius?: string;
  boxshadow?: string;
  overflow?: 'scroll' | 'hidden' | 'visible';
  transition?: string;
  zindex?: number;
}

export interface InputProps
  extends React.HTMLAttributes<HTMLInputElement>,
    styledInput {}
