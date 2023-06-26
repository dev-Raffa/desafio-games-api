import { ChangeEventHandler, ReactNode } from 'react';
import { SelectStyled, selectStyle } from './style';

type selectProps = selectStyle & {
  name: string;
  onchange: ChangeEventHandler<HTMLSelectElement>;
  children: ReactNode;
};

export const Select = ({ children, onchange, ...args }: selectProps) => {
  return (
    <SelectStyled onChange={onchange} {...args}>
      {children}
    </SelectStyled>
  );
};
