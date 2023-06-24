import * as S from '../style';

import { titleProps } from '../types';

export const Title = ({ children, ...rest }: titleProps) => {
  return <S.Title {...rest}>{children}</S.Title>;
};
