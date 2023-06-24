export interface colorsBase {
  primary: string;
  secondary: string;
  tertiary?: string;
}

export interface sizes {
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
}

export interface colors extends colorsBase {
  info: string;
  success: string;
  warning: string;
  danger: string;
  dark: string;
  light: string;
}

export interface typography {
  sizes: sizes;
  colors: colors;
}

export interface buttons {
  colors: colors;
  sizes: {
    height: sizes;
    minWidth: sizes;
  };
}

export interface theme {
  title: string;
  transitions: string;
  colors: colorsBase;
  typography: typography;
  buttons: buttons;
}
