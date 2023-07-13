'use client';
import { useContext } from 'react';

import { Select } from '@/components/utils/selection';
import { GamesContext } from '@/app/contexts/game/context';

export const SelectGenre = () => {
  const { genres, selectGenre } = useContext(GamesContext);

  return (
    <Select
      name="genreFilter"
      onchange={(e) => selectGenre(e.currentTarget.value)}
      width="30%"
      minwidth="300px"
      height="3rem"
      border="none"
      borderradius="0.5rem"
      fontsize="1.8rem"
      padding="0 1rem"
    >
      <option value={''}> filtrar por genero</option>
      {genres.map((item, index) => {
        return (
          <option key={index} value={item}>
            {item}
          </option>
        );
      })}
    </Select>
  );
};