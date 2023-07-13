'use client';

import { useContext } from 'react';
import { BiMessageSquareError } from 'react-icons/bi';
import { GamesContext } from '@/contexts/gameInformations';
import { Icon } from '@/components/medias/icons';
import { Text } from '@/components/typography/texts';
import { ConteinerFlex } from '@/components/containers';

export const MsgError = () => {
  const { erro } = useContext(GamesContext);
  return (
    <ConteinerFlex
      as={'section'}
      gap="1rem"
      width="100%"
      aligny="center"
      alignx="center"
    >
      <Icon
        color="red"
        height="5rem"
        width="5rem"
        icon={<BiMessageSquareError />}
      />
      <Text size="l" color="secondary">
        {erro}
      </Text>
    </ConteinerFlex>
  );
};
