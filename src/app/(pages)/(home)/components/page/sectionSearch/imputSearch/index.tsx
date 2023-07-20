'use client';

import { InputStyled } from '@/components/utils/input/style/style';
import { useAppDispatch } from '@/redux/hook';
import { filteredGamesByTitle } from '@/redux/models/games/slice';
import { useState } from 'react';

export const InputSearch = () => {
  const [value, setValue] = useState<string>('');
  const despatch = useAppDispatch();

  const handleChange = (value: string) => {
    despatch(filteredGamesByTitle(value));
    setValue(value);
  };

  return (
    <InputStyled
      type="search"
      placeholder="Pesquisar"
      onChange={(e) => handleChange(e.target.value)}
      value={value}
      width="25rem"
      height="3rem"
      border="1px solid blue"
      borderradius="0.5rem"
      fontsize="2rem"
      padding="0 1rem"
    />
  );
};
