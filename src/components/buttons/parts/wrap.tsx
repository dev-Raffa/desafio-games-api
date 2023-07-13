import { StyledButtonWrap } from '../styles';
import { buttonWrap } from '../types';

export const ButtonWrap = ({ ...args }: buttonWrap) => {
  return <StyledButtonWrap {...args} />;
};
