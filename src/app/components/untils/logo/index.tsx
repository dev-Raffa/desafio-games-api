import { CgGames } from 'react-icons/cg';
import { SectionFlex } from '@/components/containers/section';
import { Text } from '@/components/typography/texts';
import { Icon } from '@/components/medias/icons';

export const Logo = () => {
  return (
    <SectionFlex
      height="100%"
      width="fit-content"
      gap="1rem"
      alignx="center"
      aligny="center"
    >
      <Icon color="blue" icon={<CgGames />} height="5rem" width="5rem"></Icon>
      <Text color="blue" size="l">
        API Games
      </Text>
    </SectionFlex>
  );
};
