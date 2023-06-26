'use client';

import { useContext } from 'react';
import { GamesContext } from '@/contexts/gameInformations';
import { Input } from '@/components/utils/input';

export const InputSearch = () => {
  const { search, setSearch } = useContext(GamesContext);

  return (
    <Input
      name="searchGames"
      type="search"
      placeholder="Pesquisar"
      onchange={(e) => setSearch(e.target.value)}
      value={search}
      width="40%"
      minwidth="300px"
      height="3rem"
      border="none"
      borderradius="0.5rem"
      fontsize="2rem"
      padding="0 1rem"
    />
  );
};
