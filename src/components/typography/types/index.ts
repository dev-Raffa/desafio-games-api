import { children, breakPoint, hover } from '@/types/layout';
import { colors } from '@/types/theme';

export interface styledTypography {
  decoration?: string;
  margin?: string;
  lineheight?: string;
  weight?: string;
  color: keyof colors | string;
  align?: 'center' | 'left' | 'right' | 'justify';
  breakpoints?: Array<breakPoint>;
  hover?: hover;
}

export interface titleProps extends styledTypography {
  level: '1' | '2' | '3' | '4' | '5';
  children?: children;
}

export interface textProps extends styledTypography {
  size: 'xs' | 's' | 'm' | 'l' | 'xl';
  children?: children;
}

export interface textLinkProps extends textProps {
  href: string;
}
