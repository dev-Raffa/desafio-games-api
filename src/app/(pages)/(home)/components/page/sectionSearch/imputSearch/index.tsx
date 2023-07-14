'use client';

import { InputStyled } from '@/components/utils/input/style/style';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { setFilteredGames } from '@/redux/slices/games';

export const InputSearch = () => {
  const filter = useAppSelector((state) => state.games.filter);
  const despatch = useAppDispatch();

  return (
    <InputStyled
      type="search"
      placeholder="Pesquisar"
      onChange={(e) => despatch(setFilteredGames(e.target.value))}
      value={filter}
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
