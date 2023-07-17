'use client';

import { ReactNode } from 'react';
import { BlockStyle } from '@/components/containers/style';

export const WrapOffCanvas = ({
  children,
  show
}: {
  children: ReactNode;
  show: boolean;
}) => {
  return (
    <BlockStyle
      display={show ? 'flex' : 'none'}
      as="section"
      position="fixed"
      height="100vh"
      width="100vw"
      alignx="center"
      aligny="center"
      bgcolor="transparent"
      left="0"
      top="0"
      zindex={100}
    >
      {children}
    </BlockStyle>
  );
};
