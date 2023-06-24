import type { blockStyle } from '@/components/containers/types';
import type { FigureProps } from '@/components/medias/figures/types';

type item = FigureProps & {
  path?: string;
  target?: '_blank' | '_parent' | '_self' | '_top';
};

export type carouselItens = Array<item>;

export interface carousel extends blockStyle {
  itens: carouselItens;
}
