'use cient';

import { theme } from '@/types/theme';
import { createContext, useContext } from 'react';

interface ThemeContext {
  theme: theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export const useThemeContext = () => useContext(ThemeContext);
