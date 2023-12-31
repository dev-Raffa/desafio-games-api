import { CgGames } from 'react-icons/cg';
import { Text } from '@/components/typography/texts';
import { Icon } from '@/components/medias/icons';
import { ConteinerFlex } from '@/components/containers';

export const Logo = () => {
  return (
    <ConteinerFlex
      as={'section'}
      height="100%"
      width="fit-content"
      gap="1rem"
      alignx="center"
      aligny="center"
    >
      <Icon
        color="blue"
        icon={<CgGames height="100%" width="100%" />}
        height="5rem"
        width="5rem"
      ></Icon>
      <Text color="blue" size="s">
        API Games
      </Text>
    </ConteinerFlex>
  );
};
