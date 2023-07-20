'use client';

import { Select } from '@/components/utils/selection';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import {
  clearFilteredGames,
  filteredGamesByGenre
} from '@/redux/models/games/slice';
import { useState } from 'react';
import { ButtonClearFilter } from '../clearFilters';

export const SelectGenre = () => {
  const [value, setValue] = useState<string>('');
  const genres = useAppSelector((state) => state.games.genres);
  const dispatch = useAppDispatch();

  const handleSubmit = (value: string) => {
    dispatch(filteredGamesByGenre(value));
    setValue(value);
  };
  const handleClick = () => {
    dispatch(clearFilteredGames());
    setValue('');
  };
  return (
    <>
      <Select
        aria-label="select-genre"
        onChange={(e) => handleSubmit(e.currentTarget.value)}
        value={value}
        width="25rem"
        height="3rem"
        border="1px solid blue"
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
      {value && <ButtonClearFilter handleClick={handleClick} />}
    </>
  );
};
