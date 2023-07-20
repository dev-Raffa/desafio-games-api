'use client';

import { Button } from '@/components/buttons';
import { ConteinerFlex } from '@/components/containers';
import { Text } from '@/components/typography/texts';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import {
  favoriteGamesSortedByHighestRating,
  favoriteGamesSortedByLowestRating
} from '@/redux/models/games/slice';
import { setIsShowOffCanvas } from '@/redux/models/offCanvas/slice';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

export const Ordered = () => {
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.user.isLogged);

  const handleClickSortedByHighestRating = () => {
    if (isLogged) {
      dispatch(favoriteGamesSortedByHighestRating());
    } else {
      console.log('faça login');
      dispatch(setIsShowOffCanvas());
    }
  };

  const handleClickSortedByLowestRating = () => {
    if (isLogged) {
      dispatch(favoriteGamesSortedByLowestRating());
    } else {
      console.log('faça login');
      dispatch(setIsShowOffCanvas());
    }
  };

  return (
    <ConteinerFlex as="section" gap="0.5rem">
      <Text color="primary" size="s">
        ordenar por avaliação:
      </Text>
      <Button.wrap
        onClick={handleClickSortedByHighestRating}
        bgcolor="transparent"
        border="none"
        alignx="center"
        aligny="center"
        fontcolor="primary"
      >
        <Button.icon icon={<AiOutlineArrowDown />} />
      </Button.wrap>
      <Button.wrap
        onClick={handleClickSortedByLowestRating}
        bgcolor="transparent"
        border="none"
        alignx="center"
        aligny="center"
        fontcolor="primary"
      >
        <Button.icon icon={<AiOutlineArrowUp />} />
      </Button.wrap>
    </ConteinerFlex>
  );
};
