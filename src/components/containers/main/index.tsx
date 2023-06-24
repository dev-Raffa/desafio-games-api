import { BlockStyle } from '../style';
import { blockFlex, blockGrid } from '../types';

export const MainFlex = ({ children, ...rest }: blockFlex) => {
  return (
    <BlockStyle variant="main" display="flex" direction="row" {...rest}>
      {children}
    </BlockStyle>
  );
};

export const MainGrid = ({ children, ...rest }: blockGrid) => {
  return (
    <BlockStyle variant="main" display="grid" {...rest}>
      {children}
    </BlockStyle>
  );
};
