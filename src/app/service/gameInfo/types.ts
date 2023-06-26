export interface gameInfos {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

export interface gameInformationsProps {
  games: Array<gameInfos>;
  genres: Array<string>;
  erro?: string;
  search?: string;
  setSearch: (value: string) => void;
  gamesFilteredBySearch: Array<gameInfos>;
  genreFilter?: string;
  selectGenre: (value: string) => void;
  gamesFilteredByGenre: Array<gameInfos>;
  loading: boolean;
}
