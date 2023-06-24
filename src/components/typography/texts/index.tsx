import * as S from '../style';
import { textProps } from '../types';

export const Text = ({ children, ...rest }: textProps) => {
  return <S.Text {...rest}>{children}</S.Text>;
};
