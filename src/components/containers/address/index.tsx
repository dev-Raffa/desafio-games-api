import { BlockStyle } from '../style';
import { blockFlex, blockGrid } from '../types';

export const AddressFlex = ({ children, ...rest }: blockFlex) => {
  return (
    <BlockStyle variant="address" display="flex" direction="row" {...rest}>
      {children}
    </BlockStyle>
  );
};

export const AddressGrid = ({ children, ...rest }: blockGrid) => {
  return (
    <BlockStyle variant="address" display="grid" {...rest}>
      {children}
    </BlockStyle>
  );
};
