import { ConteinerFlex } from '@/components/containers';
import { cardProps } from '../types';

export const CardFooter = ({ ...args }: cardProps) => {
  return <ConteinerFlex as={'footer'} {...args}></ConteinerFlex>;
};
