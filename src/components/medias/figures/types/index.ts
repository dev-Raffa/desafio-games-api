import type { blockFlex } from '@/components/containers/types';

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

export interface FigureProps extends blockFlex {
  img: imgFigureProps;
  caption?: blockFlex['children'] | string;
}
