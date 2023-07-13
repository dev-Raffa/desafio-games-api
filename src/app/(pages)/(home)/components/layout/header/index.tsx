import { IsLoged } from '../../utils/buttons/isLoged';
import { ToggleTheme } from '../../utils/buttons/toggleTheme';
import { Logo } from '../../utils/logo';
import { ConteinerFlex } from '@/components/containers';

export const Header = () => {
  return (
    <ConteinerFlex
      as={'header'}
      alignx="space-between"
      aligny="center"
      width="80%"
      height="7.5rem"
      position="sticky"
      padding="0 10%"
    >
      <Logo />
      <ConteinerFlex as="section" alignx="center" width="fit-content">
        <ToggleTheme />
        <IsLoged />
      </ConteinerFlex>
    </ConteinerFlex>
  );
};
