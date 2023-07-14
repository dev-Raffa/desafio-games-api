import * as layoutTypes from '@/types/layout';
import * as themeTypes from '@/types/theme';

interface globalStyles {
  position?: layoutTypes.position;
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
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
  opacity?: string;
  transition?: string;
  zindex?: number;
  before?: string;
  after?: string;
  hover?: layoutTypes.hover;
  animation?: layoutTypes.animation;
}

export interface FlexStyle extends globalStyles {
  direction?: layoutTypes.direction;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

export interface GridStyles extends globalStyles {
  columns?: layoutTypes.columns;
  templatecolumns?: string;
  rows?: layoutTypes.rows;
  templaterows?: string;
}
