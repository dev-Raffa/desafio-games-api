import { SiYoutube, SiInstagram } from 'react-icons/si';
import { Nav } from '@/components/utils/navs';
import type * as T from '@/components/utils/navs/types';

const liStyle: T.LiStyle = {};

const itenStyle: T.LinkStyle = {
  align: 'center',
  fontSize: 'l',
  color: 'primary'
};

const socialMidias: T.itens = [
  {
    id: 'nav-instagram',
    linkstyle: itenStyle,
    style: liStyle,
    path: 'https://www.instagram.com/',
    target: '_blank',
    icon: { icon: <SiInstagram /> }
  },
  {
    id: 'nav-youtube',
    linkstyle: itenStyle,
    style: liStyle,
    path: 'https://www.youtube.com/',
    target: '_blank',
    icon: { icon: <SiYoutube /> }
  }
];

export const navSocialMidias: T.navigation = {
  id: 'nav-social-midias',
  itens: socialMidias,
  gap: '2rem'
};

export const NavSocialMidia = () => {
  return (
    <Nav
      direction="row"
      navgations={[navSocialMidias]}
      alignx="center"
      aligny="center"
    />
  );
};
