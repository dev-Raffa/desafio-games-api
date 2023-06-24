import * as S from '../style';
import { buttonProps } from '../types';

export const ButtonCircleOutline = ({
  children,
  arialabel,
  ...rest
}: buttonProps) => {
  return (
    <S.Button variant="circle-outline" aria-label={arialabel} {...rest}>
      {children}
    </S.Button>
  );
};
