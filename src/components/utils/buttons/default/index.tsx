import * as S from '../style';
import { buttonProps } from '../types';

export const ButtonDefault = ({
  children,
  arialabel,
  ...rest
}: buttonProps) => {
  return (
    <S.Button variant="default" aria-label={arialabel} {...rest}>
      {children}
    </S.Button>
  );
};
