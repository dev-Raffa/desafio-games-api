import {
  child,
  get,
  getDatabase,
  ref,
  remove,
  set,
  update
} from 'firebase/database';
import { favoriteGamesDto } from '../model';

export async function addFavoriteGame(
  uuid: string,
  { gameId }: favoriteGamesDto
) {
  const resp = await set(
    ref(getDatabase(), `user/${uuid}/favorites-games/${gameId}`),
    {
      id: gameId,
      favorite: true
    }
  )
    .then(() => {
      return 'Success';
    })
    .catch((e) => {
      return e.message;
    });

  return resp;
}

export async function getFavoriteGames(
  uuid: string,
  { gameId }: favoriteGamesDto
) {
  const dbRef = ref(getDatabase());
  const resp = await get(child(dbRef, `user/${uuid}/favorites-games/${gameId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.toJSON();
      } else {
        return 'Not found';
      }
    })
    .catch((e) => {
      return e.message;
    });

  return resp;
}

export async function saveGameRating(
  uuid: string,
  { gameId, rating }: favoriteGamesDto
) {
  const resp = await update(
    ref(getDatabase(), `user/${uuid}/favorites-games/${gameId}`),
    {
      id: gameId,
      rating: rating
    }
  )
    .then(() => {
      return 'Success';
    })
    .catch((e) => {
      return e.message;
    });
  return resp;
}

export async function removeFavoriteGame(
  uuid: string,
  { gameId }: favoriteGamesDto
) {
  const resp = await remove(
    ref(getDatabase(), `user/${uuid}/favorites-games/${gameId}`)
  )
    .then(() => {
      return 'Success';
    })
    .catch((e) => {
      return e.message;
    });

  return resp;
}
