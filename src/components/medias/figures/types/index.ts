import { FlexStyle } from '@/components/types/global';

export interface figureWrap
  extends FlexStyle,
    React.HTMLAttributes<HTMLElement> {}

export interface imgFigureProps {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  borderradius?: string;
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  height?: number | `${number}`;
  width?: number | `${number}`;
  zindex?: number;
}
