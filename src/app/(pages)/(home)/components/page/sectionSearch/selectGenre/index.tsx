'use client';

import { Select } from '@/components/utils/selection';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { filteredGamesByGenre } from '@/redux/models/games/slice';

export const SelectGenre = () => {
  const genres = useAppSelector((state) => state.games.genres);
  const dispatch = useAppDispatch();

  return (
    <Select
      name="genreFilter"
      onchange={(e) => dispatch(filteredGamesByGenre(e.currentTarget.value))}
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
