import { ConteinerFlex } from '@/components/containers';
import { cardProps } from '../types';

export const CardWrap = ({ ...args }: cardProps) => {
  return <ConteinerFlex as="article" {...args}></ConteinerFlex>;
};
