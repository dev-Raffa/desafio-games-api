import { ConteinerFlex } from '@/components/containers';
import { FlexStyle } from '@/components/types/global';

export const CardHeader = ({ ...args }: FlexStyle) => {
  return <ConteinerFlex as={'header'} {...args}></ConteinerFlex>;
};
