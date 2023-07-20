'use client';

import { Button } from '@/components/buttons';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import {
  clearFilteredGames,
  filteredFavoritesGames
} from '@/redux/models/games/slice';
import { useState } from 'react';
import { ButtonClearFilter } from '../clearFilters';
import { setIsShowOffCanvas } from '@/redux/models/offCanvas/slice';

export const ButtonFavorites = () => {
  const dispatch = useAppDispatch();
  const [isShow, setIsShow] = useState<boolean>(false);
  const isLogged = useAppSelector((state) => state.user.isLogged);

  const handleClick = () => {
    if (isLogged) {
      dispatch(filteredFavoritesGames());
      setIsShow(!isShow);
    } else {
      dispatch(setIsShowOffCanvas());
    }
  };
  return (
    <>
      <Button.wrap
        border="1px solid blue"
        bgcolor="transparent"
        onClick={handleClick}
        borderradius="0.5rem"
        padding="0.7rem"
      >
        <Button.text
          color="primary"
          size="s"
          align="center"
          decoration="underline"
        >
          Favoritos
        </Button.text>
      </Button.wrap>
      {isShow && (
        <ButtonClearFilter
          handleClick={() => {
            dispatch(clearFilteredGames());
            setIsShow(!isShow);
          }}
        />
      )}
    </>
  );
};
