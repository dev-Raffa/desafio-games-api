import { Icon } from '@/components/medias/icons';
import { Title } from '@/components/typography/title';
import { CgGames } from 'react-icons/cg';

export const Logo = () => {
  return (
    <>
      <Icon icon={<CgGames />} height="5rem" width="5rem" color="blue" />
      <Title level="4" color="primary">
        ApiGames
      </Title>
    </>
  );
};
