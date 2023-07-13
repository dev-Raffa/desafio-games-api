import { ConteinerFlex } from '@/components/containers';
import { FlexStyle } from '@/components/types/global';

export const CardWrap = ({ ...args }: FlexStyle) => {
  return <ConteinerFlex as="article" {...args}></ConteinerFlex>;
};
