'use client';

import { useContext } from 'react';
import { GamesContext } from '@/app/contexts/game/context';
import { InputStyled } from '@/components/utils/input/style/style';

export const InputSearch = () => {
  const { search, setSearch } = useContext(GamesContext);

  return (
    <InputStyled
      type="search"
      placeholder="Pesquisar"
      onChange={(e) => setSearch(e.target.value)}
      value={search}
      width="30%"
      minwidth="300px"
      height="3rem"
      border="none"
      borderradius="0.5rem"
      fontsize="2rem"
      padding="0 1rem"
    />
  );
};
