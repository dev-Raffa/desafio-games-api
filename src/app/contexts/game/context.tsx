'use client';

import { games } from '@/types/data';
import { createContext, useContext } from 'react';

interface gamesContext {
  games: Array<games>;
  getGames: (games: Array<games>) => void;
  genres: Array<string>;
  search?: string;
  setSearch: (value: string) => void;
  gamesFilteredBySearch: Array<games>;
  genreFilter?: string;
  selectGenre: (value: string) => void;
  gamesFilteredByGenre: Array<games>;
}

export const GamesContext = createContext<gamesContext>({} as gamesContext);

export const useGameSContext = () => useContext(GamesContext);
