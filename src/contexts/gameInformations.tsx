'use client';

import { createContext, useState, useEffect } from 'react';
import { ReactNode } from 'react';
import { gameInfos } from '@/app/service/gameInfo/types';
import { gameInformationsProps } from '@/app/service/gameInfo/types';

export const GamesContext = createContext<gameInformationsProps>(
  {} as gameInformationsProps
);

export const GamesProvider = ({ children }: { children: ReactNode }) => {
  const [games, setGames] = useState<gameInfos[]>([]);
  const [search, newSearch] = useState<string>();
  const [genreFilter, setGenreFilter] = useState<string>();
  const [erro, setErro] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const arr: Array<string> = [];

  let genres: Array<string> = [];
  let gamesFilteredBySearch: Array<gameInfos> = [];
  let gamesFilteredByGenre: Array<gameInfos> = [];

  useEffect(() => {
    fetch('https://games-test-api-81e9fb0d564a.herokuapp.com/api/data', {
      headers: { 'dev-email-address': 'teste@gmail.com' },
      signal: AbortSignal.timeout(5000)
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 299) {
          return response.json();
        } else if (response.status >= 500 && response.status < 509) {
          setErro('O servidor fahou em responder, tente recarregar a página');
          setLoading(false);
        } else {
          setErro(
            'O servidor não conseguirá responder por agora, tente voltar novamente mais tarde'
          );
          setLoading(false);
        }
      })
      .then((data) => {
        setGames(data);
        setLoading(false);
      })
      .catch(() => {
        setErro('O servidor demorou para responder, tente mais tarde');
        setLoading(false);
      });
  }, []);

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

  console.log(genres);
  console.log(erro);
  return (
    <GamesContext.Provider
      value={{
        genres,
        games,
        erro,
        search,
        setSearch,
        gamesFilteredBySearch,
        genreFilter,
        selectGenre,
        gamesFilteredByGenre,
        loading
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};
