import * as S from '../style';
import { buttonProps } from '../types';

export const ButtonOutline = ({
  children,
  arialabel,
  ...rest
}: buttonProps) => {
  return (
    <S.Button variant="outline" aria-label={arialabel} {...rest}>
      {children}
    </S.Button>
  );
};
