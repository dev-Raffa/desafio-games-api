'use client';

import { useAppSelector } from '@/redux/hook';
import { ButtonGoToTheThemeDark } from './parts/dark';
import { ButtonGoToTheThemeLight } from './parts/light';

export const ToggleTheme = () => {
  const title = useAppSelector((state) => state.theme.title);

  return title === 'Light' ? (
    <ButtonGoToTheThemeDark />
  ) : (
    <ButtonGoToTheThemeLight />
  );
};
