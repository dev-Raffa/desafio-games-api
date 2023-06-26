'use client';
import { useContext } from 'react';
import { BiMessageSquareError } from 'react-icons/bi';
import { GamesContext } from '@/contexts/gameInformations';
import { SectionFlex } from '@/components/containers/section';
import { Icon } from '@/components/medias/icons';
import { Text } from '@/components/typography/texts';

export const MsgError = () => {
  const { erro } = useContext(GamesContext);
  return (
    <SectionFlex gap="1rem" width="100%" height="100%" alignx="center">
      <Icon
        color="black"
        height="5rem"
        width="5rem"
        icon={<BiMessageSquareError />}
      />
      <Text size="l" color="secondary">
        {erro}
      </Text>
    </SectionFlex>
  );
};
