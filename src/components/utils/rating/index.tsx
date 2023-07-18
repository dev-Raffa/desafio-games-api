'use client';

import { useState, useEffect } from 'react';
import { ConteinerFlex } from '@/components/containers';
import { Button } from '@/components/buttons';
import { iconProps } from '@/components/medias/icons';
import { FlexStyle } from '@/components/types/global';
import { styleButtonWrap } from './style';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import {
  updateFavoriteGame,
  addFavoriteGame
} from '@/app/services/firebase/games/controller';
import { setIsShowOffCanvas } from '@/redux/models/offCanvas/slice';
import { setRating } from '@/redux/models/games/slice';

export interface ratingProps {
  idItem: number;
  wrap: FlexStyle;
  icon: iconProps;
  currentValue: number;
  maxValue: number;
  colorSelect: string;
  colorDefault: string;
  name: string;
}

export const Rating = ({
  idItem,
  name,
  currentValue,
  colorDefault,
  colorSelect,
  icon,
  maxValue,
  wrap
}: ratingProps) => {
  const [defaultValue, setDefaultValue] = useState<number>(currentValue);
  const [value, setValue] = useState<number>(defaultValue);

  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.userId);
  const games = useAppSelector((state) => state.games.games);
  const obj =
    games &&
    games.find((games) => games.id.toString().includes(idItem.toString()));
  const isFavorite = obj && obj.favorite;

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  async function handleClick(id: number, value: number) {
    if (userId && isFavorite) {
      const resp: string = await updateFavoriteGame(
        userId,
        id,
        isFavorite,
        value
      );
      switch (resp) {
        case 'Success': {
          setDefaultValue(value);
          dispatch(setRating({ idGame: id, rating: value }));
          break;
        }
        default: {
          console.log(resp);
        }
      }
    } else if (userId) {
      const resp: string = await addFavoriteGame(userId, id, value, false);
      switch (resp) {
        case 'Success': {
          setDefaultValue(value);
          dispatch(setRating({ idGame: id, rating: value }));
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
  function handleMouseOver(value: number) {
    setValue(value);
  }
  function handleMouseOut() {
    setValue(defaultValue);
  }
  function getItens(maxValue: number, name: string) {
    const item = [];
    for (let i = 0; i < maxValue; i++) {
      item.push(
        <Button.wrap
          key={`rating-${name}-item-${i}`}
          value={i + 1}
          onClick={(e) => handleClick(idItem, parseInt(e.currentTarget.value))}
          onMouseOver={(e) => handleMouseOver(parseInt(e.currentTarget.value))}
          onMouseOut={handleMouseOut}
          {...styleButtonWrap}
        >
          <Button.icon
            {...icon}
            color={value < i + 1 ? colorDefault : colorSelect}
          />
        </Button.wrap>
      );
    }
    return item;
  }
  return (
    <ConteinerFlex as="section" {...wrap}>
      {getItens(maxValue, name)}
    </ConteinerFlex>
  );
};
