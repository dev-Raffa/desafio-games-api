'use client';

import { Button } from '@/components/buttons';
import { useAppDispatch } from '@/redux/hook';
import { filteredFavoritesGames } from '@/redux/models/games/slice';

export const ButtonFavorites = () => {
  const dispatch = useAppDispatch();
  return (
    <Button.wrap
      border="none"
      bgcolor="transparent"
      onClick={() => dispatch(filteredFavoritesGames())}
    >
      <Button.text
        color="primary"
        size="s"
        align="center"
        textdecoration="underline"
      >
        Favoritos
      </Button.text>
    </Button.wrap>
  );
};
