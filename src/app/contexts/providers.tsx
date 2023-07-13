import { ReactNode } from 'react';
import { ThemeContextProvider } from './theme/provider';
import { UserContextProvider } from './user/provider';
import { GamesContextProvider } from './game/provider';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <GamesContextProvider>{children}</GamesContextProvider>
      </UserContextProvider>
    </ThemeContextProvider>
  );
};
