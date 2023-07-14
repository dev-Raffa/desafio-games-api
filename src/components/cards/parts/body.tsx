import { ConteinerFlex } from '@/components/containers';
import { cardProps } from '../types';

export const CardBody = ({ ...args }: cardProps) => {
  return <ConteinerFlex as={'section'} {...args}></ConteinerFlex>;
};
