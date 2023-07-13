import { ConteinerFlex } from '@/components/containers';
import { FlexStyle } from '@/components/types/global';

export const CardFooter = ({ ...args }: FlexStyle) => {
  return <ConteinerFlex as={'footer'} {...args}></ConteinerFlex>;
};
