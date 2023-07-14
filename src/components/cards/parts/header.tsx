import { ConteinerFlex } from '@/components/containers';
import { cardProps } from '../types';

export const CardHeader = ({ ...args }: cardProps) => {
  return <ConteinerFlex as="header" {...args}></ConteinerFlex>;
};
