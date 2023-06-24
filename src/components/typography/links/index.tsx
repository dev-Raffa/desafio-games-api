import * as S from '../style';
import { textLinkProps } from '../types';

export const TextLink = ({ children, ...rest }: textLinkProps) => {
  return <S.TextLink {...rest}>{children}</S.TextLink>;
};
