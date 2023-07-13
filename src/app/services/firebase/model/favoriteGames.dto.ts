import { gameInfos } from '../../ApiGames/types';

export interface userFavoriteGamesDto extends gameInfos {
  favorite: boolean;
  rating: 0 | 1 | 2 | 3 | 4;
}
