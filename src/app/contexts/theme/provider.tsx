'use client';

import { theme } from '@/types/theme';
import { ReactNode, useState } from 'react';
import { ThemeContext } from './context';
import { ThemeProvider } from 'styled-components';
import lightTheme from '@/app/style/themes/light';
import darkTheme from '@/app/style/themes/dark';

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<theme>(lightTheme);
  const toggleTheme = () =>
    setTheme(theme.title === 'Light' ? darkTheme : lightTheme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
