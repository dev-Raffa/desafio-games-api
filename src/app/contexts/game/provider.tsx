'use client';

import { ReactNode, useState } from 'react';
import { GamesContext } from './context';
import { games } from '@/types/data';

export const GamesContextProvider = ({ children }: { children: ReactNode }) => {
  const [games, setGames] = useState<games[]>([]);
  const [search, newSearch] = useState<string>();
  const [genreFilter, setGenreFilter] = useState<string>();
  const arr: Array<string> = [];

  let genres: Array<string> = [];
  let gamesFilteredBySearch: Array<games> = [];
  let gamesFilteredByGenre: Array<games> = [];

  const getGames = (games: Array<games>) => {
    setGames(games);
  };

  games &&
    games.map((item) => {
      arr.push(item.genre);
    });
  genres = arr.filter((este, i) => arr.indexOf(este) === i);
  genres.sort();

  const setSearch = (value: string) => {
    newSearch(value);
  };

  search && search.length > 0
    ? (gamesFilteredBySearch = games.filter((games) =>
        games.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      ))
    : '';

  const selectGenre = (value: string) => {
    setGenreFilter(value);
  };

  genreFilter && genreFilter.length > 0
    ? (gamesFilteredByGenre = games.filter((games) =>
        games.genre.includes(genreFilter)
      ))
    : '';

  return (
    <GamesContext.Provider
      value={{
        genres,
        games,
        getGames,
        search,
        setSearch,
        gamesFilteredBySearch,
        genreFilter,
        selectGenre,
        gamesFilteredByGenre
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};
