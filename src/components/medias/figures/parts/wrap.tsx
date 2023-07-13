import { ConteinerFlex } from '@/components/containers';
import { FlexStyle } from '@/components/types/global';

export const FigureWrap = ({ ...args }: FlexStyle) => {
  return (
    <ConteinerFlex as={'figure'} position="relative" {...args}></ConteinerFlex>
  );
};
