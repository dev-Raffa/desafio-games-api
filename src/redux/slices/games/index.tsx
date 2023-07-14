'use client';

import { gameInformationsProps, games } from '@/app/services/ApiGames/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: gameInformationsProps = {
  games: null,
  genres: null,
  filteredGames: null
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
    setFilteredGames: (state, action: PayloadAction<string>) => {
      const filter: string = action.payload;
      if (state.genres?.indexOf(filter) && state.filteredGames) {
        state.filter = filter;
        state.filteredGames = state.filteredGames.filter((games) =>
          games.genre.includes(filter)
        );
        
      } else if (state.genres?.indexOf(filter) && state.games) {
        state.games = state.games.filter((games) =>
          games.genre.includes(filter)
        );
        
      } else if (state.filteredGames) {
        state.filter = filter;
        state.filteredGames = state.filteredGames.filter((games) =>
          games.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        );
        
      } else if (state.games) {
        state.games = state.games.filter((games) =>
          games.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        );
      }
    }
  }
});

export const { addGames, setFilteredGames } = gamesSlice.actions;
export const gamesReducer = gamesSlice.reducer;
