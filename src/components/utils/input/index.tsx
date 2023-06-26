import { ChangeEventHandler } from 'react';
import { InputStyled, inputStyle } from './style';

type inpuProps = inputStyle & {
  type: string;
  name: string;
  placeholder: string;
  onchange: ChangeEventHandler<HTMLInputElement>;
  value?: string;
};

export const Input = ({ onchange, ...args }: inpuProps) => {
  return <InputStyled onChange={onchange} {...args}></InputStyled>;
};
