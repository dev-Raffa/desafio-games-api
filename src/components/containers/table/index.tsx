import { BlockStyle } from '../style';
import { blockFlex, blockGrid } from '../types';

export const TableFlex = ({ children, ...rest }: blockFlex) => {
  return (
    <BlockStyle variant="table" display="flex" direction="row" {...rest}>
      {children}
    </BlockStyle>
  );
};

export const TableGrid = ({ children, ...rest }: blockGrid) => {
  return (
    <BlockStyle variant="table" display="grid" {...rest}>
      {children}
    </BlockStyle>
  );
};
