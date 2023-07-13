'use client';

import { useThemeContext } from '@/app/contexts/theme/context';
import { ButtonGoToTheThemeDark } from './parts/dark';
import { ButtonGoToTheThemeLight } from './parts/light';

export const ToggleTheme = () => {
  const { theme } = useThemeContext();

  return theme.title === 'Light' ? (
    <ButtonGoToTheThemeDark />
  ) : (
    <ButtonGoToTheThemeLight />
  );
};
