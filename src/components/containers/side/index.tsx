import { BlockStyle } from '../style';
import { blockFlex, blockGrid } from '../types';

export const SideFlex = ({ children, ...rest }: blockFlex) => {
  return (
    <BlockStyle variant="aside" display="flex" direction="row" {...rest}>
      {children}
    </BlockStyle>
  );
};

export const SideGrid = ({ children, ...rest }: blockGrid) => {
  return (
    <BlockStyle variant="aside" display="grid" {...rest}>
      {children}
    </BlockStyle>
  );
};
