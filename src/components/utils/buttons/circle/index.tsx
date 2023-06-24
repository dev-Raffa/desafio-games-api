import * as S from '../style';
import { buttonProps } from '../types';

export const ButtonCircle = ({
  children,
  arialabel,
  onClick,
  ...rest
}: buttonProps) => {
  return (
    <S.Button
      variant="circle"
      aria-label={arialabel}
      onClick={onClick}
      {...rest}
    >
      {children}
    </S.Button>
  );
};
