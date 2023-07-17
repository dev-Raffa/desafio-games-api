'use client';

import { addFavoriteGame } from '@/app/services/firebase/games/controller';
import { Button } from '@/components/buttons';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { setIsFavorite } from '@/redux/models/games/slice';
import { setIsShowOffCanvas } from '@/redux/models/offCanvas/slice';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

export const ButtonFavorite = ({
  idGame,
  favorite
}: {
  idGame: number;
  favorite: boolean;
}) => {
  const [isFavorite, setFavorite] = useState<boolean>(favorite);
  const userId = useAppSelector((state) => state.user.userId);
  const dispatch = useAppDispatch();

  async function handleClick() {
    if (userId) {
      const resp: string = await addFavoriteGame(userId, {
        gameId: idGame,
        favorite: isFavorite
      });
      switch (resp) {
        case 'Success': {
          setFavorite(!isFavorite);
          dispatch(setIsFavorite({ idGame: idGame, isFavorite: isFavorite }));
          break;
        }
        default: {
          console.log(resp);
        }
      }
    } else {
      dispatch(setIsShowOffCanvas());
    }
  }
  return (
    <Button.wrap onClick={handleClick} bgcolor="transparent" border="none">
      <Button.icon
        icon={<FaHeart fill="currentColor" stroke="currentColor" />}
        color={isFavorite ? 'red' : 'gray'}
      />
    </Button.wrap>
  );
};
