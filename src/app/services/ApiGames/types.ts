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
  rating?: 0 | 1 | 2 | 3 | 4;
}

export type games = Array<gameInfos>;

export interface gameInformationsProps {
  games: games | null;
  genres: Array<string> | null;
  filter?: string;
  filteredGames: Array<gameInfos> | null;
}
