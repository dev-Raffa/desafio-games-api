import { BlockStyle } from '../style';
import { blockFlex, blockGrid } from '../types';

export const FooterFlex = ({ children, ...rest }: blockFlex) => {
  return (
    <BlockStyle variant="footer" display="flex" direction="row" {...rest}>
      {children}
    </BlockStyle>
  );
};

export const FooterGrid = ({ children, ...rest }: blockGrid) => {
  return (
    <BlockStyle variant="footer" display="grid" {...rest}>
      {children}
    </BlockStyle>
  );
};
