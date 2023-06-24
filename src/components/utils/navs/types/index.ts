import * as themeTypes from '@/types/theme';
import * as layoutTypes from '@/types/layout';

export type medias = Array<layoutTypes.breakPoint>;

type subPages = {
  key: string;
  title?: string;
  path: string;
  subPage?: Array<subPages>;
};

type icon = {
  icon?: {
    key?: string;
    icon?: layoutTypes.children;
    hover?: layoutTypes.hover;
    animation?: layoutTypes.animation;
    breakpoints?: Array<layoutTypes.breakPoint>;
  };
};

type itenConifig = {
  id: string;
  arialabel?: string;
  title?: string;
  path?: string;
  target?: '_blank' | '_parent' | '_self' | '_top';
  breakpoints?: Array<layoutTypes.breakPoint>;
  subPages?: Array<subPages>;
};
export type item = itenConifig &
  icon & {
    style: LiStyle;
    linkstyle: LinkStyle;
  };
export type itens = Array<item>;

export type IconStyle = {
  animation?: layoutTypes.animation;
  hover?: layoutTypes.hover;
  breakpoints?: Array<layoutTypes.breakPoint>;
  children: layoutTypes.children;
};

export type LinkStyle = {
  fontSize?: keyof themeTypes.sizes;
  color?: keyof themeTypes.colors | string;
  height?: string;
  width?: string;
  selected?: {
    color?: string;
    before?: string;
    after?: string;
  };
  align?: layoutTypes.alignX;
  breakpoints?: Array<layoutTypes.breakPoint>;
  animation?: layoutTypes.animation;
  hover?: layoutTypes.hover;
  onClick?: () => void;
};

export type LiStyle = {
  height?: string;
  maxheight?: string;
  minheight?: string;
  width?: string;
  maxwidth?: string;
  minwidth?: string;
  aligny?: layoutTypes.alignY;
  alignx?: layoutTypes.alignX;
  padding?: string;
  border?: string;
  borderleft?: string;
  bordertop?: string;
  borderright?: string;
  borderbottom?: string;
  borderradius?: string;
  bgcolor?: keyof themeTypes.colorsBase;
  direction?: layoutTypes.direction;
  before?: string;
  after?: string;
  hover?: layoutTypes.hover;
  animation?: layoutTypes.animation;
  breakpoints?: Array<layoutTypes.breakPoint>;
  isselect?: 'true' | 'false';
};

export type UlStyle = {
  bgcolor?: keyof themeTypes.colorsBase;
  direction?: layoutTypes.direction;
  padding?: string;
  gap?: string;
  height?: string;
  width?: string;
  align?: layoutTypes.alignX;
  border?: string;
  borderradius?: string;
  breakpoints?: Array<layoutTypes.breakPoint>;
  children?: layoutTypes.children;
};

export type navStyle = {
  direction: layoutTypes.direction;
  height?: layoutTypes.height;
  width?: string;
  maxwidth?: string;
  minwidth?: layoutTypes.width;
  alignx?: layoutTypes.alignX;
  aligny?: layoutTypes.alignY;
  bgcolor?: keyof themeTypes.colorsBase;
  breakpoints?: Array<layoutTypes.breakPoint>;
  children?: layoutTypes.children;
};

export type navigation = UlStyle & {
  id: string;
  itens: Array<item>;
};

export type navProps = navStyle & {
  isOffCanvas?: boolean;
  navgations: Array<navigation>;
};
