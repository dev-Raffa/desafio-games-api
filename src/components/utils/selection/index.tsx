import { ChangeEventHandler, ReactNode } from 'react';
import { SelectStyled, selectStyle } from './style';

interface selectProps
  extends selectStyle,
    React.HTMLAttributes<HTMLSelectElement> {
  value: string;
}

export const Select = ({ children, value, ...args }: selectProps) => {
  return (
    <SelectStyled value={value} {...args}>
      {children}
    </SelectStyled>
  );
};
