import { children, breakPoint } from '@/types/layout';
import { colors } from '@/types/theme';

export interface titleProps {
  level: '1' | '2' | '3' | '4' | '5';
  lineheight?: string;
  weight?: string;
  color: keyof colors | string;
  align?: 'center' | 'left' | 'right' | 'justify';
  children: children;
  breakpoints?: Array<breakPoint>;
}

export interface textProps {
  size: 'xs' | 's' | 'm' | 'l' | 'xl';
  lineheight?: string;
  weight?: string;
  color: keyof colors | string;
  align?: 'center' | 'left' | 'right' | 'justify';
  children: children;
  breakpoints?: Array<breakPoint>;
}

export interface textLinkProps extends textProps {
  href: string;
}

export interface typogaphyStyles {
  level?: '1' | '2' | '3' | '4' | '5';
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  lineheight?: string;
  weight?: string;
  color: keyof colors | string;
  align?: 'center' | 'left' | 'right' | 'justify';
  breakpoints?: Array<breakPoint>;
}
