'use client';

import { gameInformationsProps, games } from '@/app/services/ApiGames/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: gameInformationsProps = {
  games: null,
  genres: null,
  filteredGames: null,
  filterTitle: '',
  filterGenre: ''
};

export const gamesSlice = createSlice({
  name: 'games',
  initialState: initialState,
  reducers: {
    addGames: (state, action: PayloadAction<games>) => {
      state.games = action.payload;
      if (action.payload) {
        const arr: Array<string> = [];
        action.payload.map((item) => {
          arr.push(item.genre);
        });
        state.genres = arr.filter((este, i) => arr.indexOf(este) === i).sort();
      }
    },
    filteredFavoritesGames: (state) => {
      if (state.filteredGames && state.filteredGames.length > 0) {
        const arr: games = [];
        state.filteredGames.map((item) => {
          if (item.favorite) {
            arr.push(item);
          }
        });
        state.filteredGames = arr;
      } else if (state.games) {
        const arr: games = [];
        state.games.map((item) => {
          if (item.favorite) {
            arr.push(item);
          }
        });
        state.filteredGames = arr;
      }
    },
    filteredGamesByGenre: (state, action: PayloadAction<string>) => {
      state.filterGenre = action.payload;
      if (
        state.filterGenre.length > 0 &&
        state.filteredGames &&
        state.filteredGames.length > 0
      ) {
        if (state.filterTitle.length > 0 && state.games) {
          state.filterError = undefined;
          const arr = state.games.filter((games) =>
            games.genre
              .toLocaleLowerCase()
              .includes(state.filterGenre.toLocaleLowerCase())
          );
          const arrFiltered = arr.filter((games) =>
            games.title
              .toLocaleLowerCase()
              .includes(state.filterTitle.toLocaleLowerCase())
          );

          arrFiltered.length > 0
            ? (state.filteredGames = arrFiltered)
            : (state.filterError = 'jogo não encontrado!');
        } else if (state.games) {
          state.filteredGames = state.games.filter((games) =>
            games.genre
              .toLocaleLowerCase()
              .includes(state.filterGenre.toLocaleLowerCase())
          );
        }
      } else if (state.games) {
        state.filteredGames = state.games.filter((games) =>
          games.genre
            .toLocaleLowerCase()
            .includes(state.filterGenre.toLocaleLowerCase())
        );
      }
    },
    filteredGamesByTitle: (state, action: PayloadAction<string>) => {
      state.filterTitle = action.payload;
      if (
        state.filterTitle.length > 0 &&
        state.filteredGames &&
        state.filteredGames.length > 0
      ) {
        if (state.filterGenre.length > 0 && state.games) {
          state.filterError = undefined;
          const arr = state.games.filter((games) =>
            games.genre
              .toLocaleLowerCase()
              .includes(state.filterGenre.toLocaleLowerCase())
          );
          const arrFiltered = arr.filter((games) =>
            games.title
              .toLocaleLowerCase()
              .includes(state.filterTitle.toLocaleLowerCase())
          );

          arrFiltered.length > 0
            ? (state.filteredGames = arrFiltered)
            : (state.filterError = 'jogo não encontrado!');
        } else if (state.games) {
          state.filterError = undefined;
          state.filteredGames = state.filteredGames.filter((games) =>
            games.title
              .toLocaleLowerCase()
              .includes(state.filterTitle.toLocaleLowerCase())
          );
        }
      } else if (
        state.filterTitle.length <= 0 &&
        state.filterGenre.length > 0 &&
        state.games
      ) {
        state.filterError && (state.filterError = undefined);

        state.filteredGames = state.games.filter((games) =>
          games.genre
            .toLocaleLowerCase()
            .includes(state.filterGenre.toLocaleLowerCase())
        );
      } else if (state.filteredGames) {
        state.filterError && (state.filterError = undefined);
      } else if (state.games) {
        state.filterError && (state.filterError = undefined);
        state.filteredGames = state.games.filter((games) =>
          games.title
            .toLocaleLowerCase()
            .includes(state.filterTitle.toLocaleLowerCase())
        );
      }
    },
    setIsFavorite: (
      state,
      action: PayloadAction<{ idGame: number; isFavorite: boolean }>
    ) => {
      if (state.games) {
        const arr = state.games;
        const i = state.games.findIndex((games) =>
          games.id.toString().includes(action.payload.idGame.toString())
        );
        const obj = arr[i];
        obj.favorite = action.payload.isFavorite;
        state.games.splice(i, 1, obj);
      }
    },
    setRating: (
      state,
      action: PayloadAction<{ idGame: number; rating: number }>
    ) => {
      if (state.games) {
        const arr = state.games;
        const i = state.games.findIndex((games) =>
          games.id.toString().includes(action.payload.idGame.toString())
        );
        const obj = arr[i];

        obj.rating = action.payload.rating;
        state.games.splice(i, 1, obj);
      }
    },
    favoriteGamesSortedByHighestRating: (state) => {
      state.games &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        state.games.sort((a, b) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          if (a.rating > b.rating) {
            return -1;
          } else {
            return true;
          }
        });
    },
    favoriteGamesSortedByLowestRating: (state) => {
      state.games &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        state.games?.sort((a, b) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          if (a.rating < b.rating) {
            return -1;
          } else {
            return true;
          }
        });
    }
  }
});

export const {
  addGames,
  filteredGamesByGenre,
  filteredGamesByTitle,
  setIsFavorite,
  setRating,
  favoriteGamesSortedByHighestRating,
  favoriteGamesSortedByLowestRating,
  filteredFavoritesGames
} = gamesSlice.actions;
export const gamesReducer = gamesSlice.reducer;
