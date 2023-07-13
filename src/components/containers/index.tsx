import { BlockStyle } from './style';
import { baseElementFlex, baseElementGrid } from './types';

export const ConteinerFlex = ({ children, as, ...args }: baseElementFlex) => {
  return (
    <BlockStyle as={as} display="flex" {...args}>
      {children}
    </BlockStyle>
  );
};

export const ConteinerGrid = ({ children, as, ...args }: baseElementGrid) => {
  return (
    <BlockStyle as={as} display="grid" {...args}>
      {children}
    </BlockStyle>
  );
};
