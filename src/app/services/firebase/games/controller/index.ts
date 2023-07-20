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
  gameId: number,
  rating?: number,
  favorite?: boolean
) {
  const resp = await set(
    ref(getDatabase(), `users/${uuid}/favorites-games/${gameId}`),
    {
      id: gameId,
      favorite: favorite,
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

export async function getOneFavoriteGames(
  uuid: string,
  { gameId }: favoriteGamesDto
) {
  const dbRef = ref(getDatabase());
  const resp = await get(
    child(dbRef, `users/${uuid}/favorites-games/${gameId}`)
  )
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

export async function getAllFavoriteGames(uuid: string) {
  const dbRef = ref(getDatabase());
  const resp = await get(child(dbRef, `users/${uuid}/favorites-games/`))
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

export async function updateFavoriteGame(
  uuid: string,
  gameId: number,
  isFavorite?: boolean,
  rating?: number
) {
  const resp = await update(
    ref(getDatabase(), `users/${uuid}/favorites-games/${gameId}`),
    {
      id: gameId,
      rating: rating,
      favorite: isFavorite
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
    ref(getDatabase(), `users/${uuid}/favorites-games/${gameId}`)
  )
    .then(() => {
      return 'Success';
    })
    .catch((e) => {
      return e.message;
    });

  return resp;
}
