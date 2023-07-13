import { ReactElement } from 'react';
import { Caption } from '../style';

export function FigureCaption({ children }: { children: ReactElement }) {
  return <Caption>{children}</Caption>;
}
