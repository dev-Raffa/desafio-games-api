import * as layoutTypes from '@/types/layout';
import * as themeTypes from '@/types/theme';
import { FlexStyle } from '../../types/global';

export interface wrapForm
  extends React.HTMLAttributes<HTMLFormElement>,
    FlexStyle {}

export interface styledFieldForm {
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

export interface fieldForm
  extends React.HTMLAttributes<HTMLLabelElement>,
    styledFieldForm {}
