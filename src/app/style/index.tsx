'use client';

import { useAppSelector } from '@/redux/hook';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './global';

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const theme = useAppSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
