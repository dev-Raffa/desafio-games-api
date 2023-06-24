import { BlockStyle } from '../style';
import { blockFlex, blockGrid } from '../types';

export const HeaderFlex = ({ children, ...rest }: blockFlex) => {
  return (
    <BlockStyle variant="header" display="flex" direction="row" {...rest}>
      {children}
    </BlockStyle>
  );
};

export const HeaderGrid = ({ children, ...rest }: blockGrid) => {
  return (
    <BlockStyle variant="header" display="grid" {...rest}>
      {children}
    </BlockStyle>
  );
};
