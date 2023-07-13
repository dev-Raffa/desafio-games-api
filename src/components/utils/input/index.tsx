import { InputStyled } from './style/style';
import { InputProps } from './types';

export const Input = ({ ...args }: InputProps) => {
  return <InputStyled {...args}></InputStyled>;
};
