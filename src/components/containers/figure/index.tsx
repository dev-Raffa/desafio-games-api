import { BlockStyle } from '../style';
import { blockFlex, blockGrid } from '../types';

export const FigureFlex = ({ children, ...rest }: blockFlex) => {
  return (
    <BlockStyle variant="figure" display="flex" {...rest}>
      {children}
    </BlockStyle>
  );
};

export const FigureGrid = ({ children, ...rest }: blockGrid) => {
  return (
    <BlockStyle variant="figure" display="grid" {...rest}>
      {children}
    </BlockStyle>
  );
};
