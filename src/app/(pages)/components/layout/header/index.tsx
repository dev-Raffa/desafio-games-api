import { HeaderFlex } from '@/components/containers/header';
import { Logo } from './logo';
import { NavSocialMidia } from './nav';

export const Header = () => {
  return (
    <HeaderFlex
      alignx="space-between"
      aligny="center"
      width="100%"
      height="7.5rem"
      padding="0 10%"
      position="sticky"
    >
      <Logo />
      <NavSocialMidia />
    </HeaderFlex>
  );
};
