import { BlockStyle } from '../style';
import { blockFlex, blockGrid } from '../types';

export const VideoFlex = ({ children, ...rest }: blockFlex) => {
  return (
    <BlockStyle variant="video" display="flex" direction="row" {...rest}>
      {children}
    </BlockStyle>
  );
};

export const VideoGrid = ({ children, ...rest }: blockGrid) => {
  return (
    <BlockStyle variant="video" display="grid" {...rest}>
      {children}
    </BlockStyle>
  );
};
