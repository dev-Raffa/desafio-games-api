import { HeaderFlex } from '@/components/containers/header';
import { Logo } from '../../untils/logo';

export const Header = () => {
  return (
    <HeaderFlex
      alignx="space-between"
      aligny="center"
      width="80%"
      height="15rem"
      position="sticky"
      padding="0 10%"
    >
      <Logo />
    </HeaderFlex>
  );
};
