'use client';
import { BlockStyle } from '../style';
import { blockFlex, blockGrid } from '../types';

export const SectionFlex = ({ children, ...rest }: blockFlex) => {
  return (
    <BlockStyle variant="section" display="flex" direction="row" {...rest}>
      {children}
    </BlockStyle>
  );
};

export const SectionGrid = ({ children, ...rest }: blockGrid) => {
  return (
    <BlockStyle variant="section" display="grid" {...rest}>
      {children}
    </BlockStyle>
  );
};
