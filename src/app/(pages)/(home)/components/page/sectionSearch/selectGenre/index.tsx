'use client';

import { Select } from '@/components/utils/selection';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { setFilteredGames } from '@/redux/slices/games';

export const SelectGenre = () => {
  const genres = useAppSelector((state) => state.games.genres);
  const dispatch = useAppDispatch();

  return (
    <Select
      name="genreFilter"
      onchange={(e) => dispatch(setFilteredGames(e.currentTarget.value))}
      width="30%"
      minwidth="300px"
      height="3rem"
      border="none"
      borderradius="0.5rem"
      fontsize="1.8rem"
      padding="0 1rem"
    >
      <option value={''}> filtrar por genero</option>
      {genres &&
        genres.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
    </Select>
  );
};
