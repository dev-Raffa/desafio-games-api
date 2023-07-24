'use client';

import {
  addFavoriteGame,
  updateFavoriteGame
} from '@/app/services/firebase/games/controller';
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
  favorite?: boolean;
}) => {
  const [isFavorite, setFavorite] = useState<boolean>(
    favorite ? favorite : false
  );
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.userId);
  const games = useAppSelector((state) => state.games.games);
  const obj =
    games &&
    games.find((games) => games.id.toString().includes(idGame.toString()));
  const rating = obj && obj.rating;

  async function handleClick() {
    if ((userId && rating) || (userId && rating && isFavorite)) {
      const resp: string = await updateFavoriteGame(
        userId,
        idGame,
        !isFavorite,
        rating
      );
      switch (resp) {
        case 'Success': {
          setFavorite(!isFavorite);
          dispatch(
            setIsFavorite({
              idGame: idGame,
              isFavorite: !isFavorite
            })
          );
          break;
        }
        default: {
          console.log(resp);
        }
      }
    } else if (userId) {
      const resp: string = await addFavoriteGame(
        userId,
        idGame,
        0,
        !isFavorite
      );
      switch (resp) {
        case 'Success': {
          setFavorite(!isFavorite);
          dispatch(setIsFavorite({ idGame: idGame, isFavorite: !isFavorite }));
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
