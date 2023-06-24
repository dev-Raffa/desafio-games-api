import { ReactNode } from 'react';

export type position = 'absolute' | 'fixed' | 'relative' | 'sticky';
export type display = 'flex' | 'grid';
export type direction = 'row' | 'column';
export type columns = 12 | 16 | 'auto-fill';
export type rows = 'auto-fill' | number;
export type alignX =
  | 'left'
  | 'center'
  | 'right'
  | 'space-around'
  | 'space-between';
export type alignY = 'start' | 'center' | 'end';
export type height = 'fix-content' | string;
export type width = 'fix-content' | string;
export type children = ReactNode;
export type breakPoint = {
  sizes: {
    minWidth?: string;
    maxWidth?: string;
  };
  comands: string;
};
export type hover = {
  itemid?: string;
  comands: string;
  before?: string;
  after?: string;
};
export type animation = {
  title?: string;
  from?: string;
  to: string;
  delay?: string;
  duration?: string;
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
  repeat?: 'infinite' | number;
};
export type target = {
  id: string;
  comands: string;
  before?: string;
  after?: string;
  animation?: {
    variant?: 'opacity';
    time?: string;
    delay?: string;
  };
};
