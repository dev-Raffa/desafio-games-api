import { BlockStyle } from '../style';
import { blockFlex, blockGrid } from '../types';

export const ArticleFlex = ({ children, ...rest }: blockFlex) => {
  return (
    <BlockStyle variant="article" display="flex" direction="row" {...rest}>
      {children}
    </BlockStyle>
  );
};

export const ArticleGrid = ({ children, ...rest }: blockGrid) => {
  return (
    <BlockStyle variant="article" display="grid" {...rest}>
      {children}
    </BlockStyle>
  );
};
