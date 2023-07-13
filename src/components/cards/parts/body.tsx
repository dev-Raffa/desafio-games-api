import { ConteinerFlex } from '@/components/containers';
import { FlexStyle } from '@/components/types/global';

export const CardBody = ({ ...args }: FlexStyle) => {
  return <ConteinerFlex as={'section'} {...args}></ConteinerFlex>;
};
