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
  favorite?: boolean;
  rating?: number;
}

export type games = Array<gameInfos>;

export interface gameInformationsProps {
  games: games | null;
  genres: Array<string> | null;
  filterGenre: string;
  filterTitle: string;
  filterError?: string;
  filteredGames: Array<gameInfos> | null;
}
