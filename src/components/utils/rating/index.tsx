'use client';

import { useState, useEffect, MouseEventHandler } from 'react';
import { ConteinerFlex } from '@/components/containers';
import { Button } from '@/components/buttons';
import { iconProps } from '@/components/medias/icons';
import { FlexStyle } from '@/components/types/global';
import { styleButtonWrap } from './style';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { saveGameRating } from '@/app/services/firebase/games/controller';
import { setIsShowOffCanvas } from '@/redux/models/offCanvas/slice';
import { setOneRating } from '@/redux/models/games/slice';

export interface ratingProps {
  idItem: number;
  wrap: FlexStyle;
  icon: iconProps;
  currentValue: number;
  maxValue: number;
  colorSelect: string;
  colorDefault: string;
  name: string;
  onclick?: MouseEventHandler<HTMLButtonElement>;
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

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  async function handleClick(id: number, value: number) {
    if (userId) {
      const resp: string = await saveGameRating(userId, {
        gameId: id,
        rating: value
      });
      switch (resp) {
        case 'Success': {
          setDefaultValue(value);
          dispatch(setOneRating({ idGame: id, rating: value }));
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
