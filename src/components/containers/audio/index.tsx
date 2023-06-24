import { BlockStyle } from '../style';
import { blockFlex, blockGrid } from '../types';

export const AudioFlex = ({ children, ...rest }: blockFlex) => {
  return (
    <BlockStyle variant="audio" display="flex" direction="row" {...rest}>
      {children}
    </BlockStyle>
  );
};

export const AudioGrid = ({ children, ...rest }: blockGrid) => {
  return (
    <BlockStyle variant="audio" display="grid" {...rest}>
      {children}
    </BlockStyle>
  );
};
