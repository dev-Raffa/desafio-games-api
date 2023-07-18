'use client';

import { Button } from '@/components/buttons';
import { ConteinerFlex } from '@/components/containers';
import { Text } from '@/components/typography/texts';
import { useAppDispatch } from '@/redux/hook';
import {
  favoriteGamesSortedByHighestRating,
  favoriteGamesSortedByLowestRating
} from '@/redux/models/games/slice';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

export const Ordered = () => {
  const despatch = useAppDispatch();
  return (
    <ConteinerFlex as="section" gap="0.5rem">
      <Text color="primary" size="s">
        ordenar por avaliação:
      </Text>
      <Button.wrap
        onClick={() => despatch(favoriteGamesSortedByHighestRating())}
      >
        <Button.icon icon={<AiOutlineArrowDown />} />
      </Button.wrap>
      <Button.wrap
        onClick={() => despatch(favoriteGamesSortedByLowestRating())}
      >
        <Button.icon icon={<AiOutlineArrowUp />} />
      </Button.wrap>
    </ConteinerFlex>
  );
};
