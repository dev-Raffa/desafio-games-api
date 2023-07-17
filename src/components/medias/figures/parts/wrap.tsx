import { ConteinerFlex } from '@/components/containers';
import { figureWrap } from '../types';

export const FigureWrap = ({ ...args }: figureWrap) => {
  return (
    <ConteinerFlex as={'figure'} position="relative" {...args}></ConteinerFlex>
  );
};
