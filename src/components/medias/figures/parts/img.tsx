import { Img } from '../style';
import { imgFigureProps } from '../types';

export function FigureImg({ src, alt, fit }: imgFigureProps) {
  return <Img src={src} alt={alt} fit={fit} />;
}
