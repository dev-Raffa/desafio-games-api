import { ReactNode, RefObject } from 'react';
import * as layoutTypes from '@/types/layout';
import * as themeTypes from '@/types/theme';

export type variant =
  | 'header'
  | 'main'
  | 'aside'
  | 'footer'
  | 'article'
  | 'section'
  | 'address'
  | 'audio'
  | 'figure'
  | 'table'
  | 'video';

export interface blockStyle {
  className?: string;
  id?: string;
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

export interface blockFlex extends blockStyle {
  direction?: layoutTypes.direction;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  children?: ReactNode;
  ref?: RefObject<HTMLDivElement>;
}

export interface blockGrid extends blockStyle {
  columns?: layoutTypes.columns;
  templatecolumns?: string;
  rows?: layoutTypes.rows;
  templaterows?: string;
  children?: ReactNode;
  ref?: RefObject<HTMLDivElement>;
}

export interface blockProps extends blockFlex, blockGrid {
  variant: variant;
  display: layoutTypes.display;
  children?: ReactNode;
}
