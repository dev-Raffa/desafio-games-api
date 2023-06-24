'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from '@/style/theme';

export const ThemeProv = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={Theme}> {children} </ThemeProvider>;
};
