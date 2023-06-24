import * as themeTypes from '@/types/theme';
import * as layoutTypes from '@/types/layout';
import { blockFlex } from '@/components/containers/types';

export type cardHeader = {
  alignx: layoutTypes.alignX;
  color?: keyof themeTypes.colors;
  content: layoutTypes.children;
};

export interface cardProps extends blockFlex {
  keyid: string;
  height: string;
  header?: cardHeader;
  body?: layoutTypes.children;
  footer?: layoutTypes.children;
}

export interface cardGroup extends blockFlex {
  title?: string;
  itens: Array<cardProps>;
}
