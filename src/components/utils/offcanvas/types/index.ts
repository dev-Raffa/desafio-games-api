import * as typeCard from '../../cards/types';
import * as typeButtons from '../../buttons/types';
import { animation } from '@/types/layout';

export type buttonCanvas = {
  variant: typeButtons.buttonStyleProps['variant'];
  color?: typeButtons.buttonProps['color'];
  bgcolor: typeButtons.buttonProps['bgcolor'];
  height: typeButtons.buttonProps['height'];
  icon?: typeButtons.buttonProps['children'];
};

export type cardOffCanvas = {
  top: typeCard.cardProps['top'];
  left: typeCard.cardProps['left'];
  bgcolor: typeCard.cardProps['bgcolor'];
  height: typeCard.cardProps['height'];
  width: typeCard.cardProps['width'];
  buttonclose: buttonCanvas;
  body: typeCard.cardProps['body'];
  footer?: typeCard.cardProps['footer'];
  padding?: typeCard.cardProps['padding'];
};

export type offCanvas = {
  keyid: string;
  buttonopen: buttonCanvas;
  card: cardOffCanvas;
  animation?: animation;
};
