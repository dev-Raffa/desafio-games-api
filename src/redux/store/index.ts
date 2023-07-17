'use client';

import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../models/user';
import logger from 'redux-logger';
import { themeReducer } from '../models/theme';
import { gamesReducer } from '../models/games/slice';
import { offCanvasReducer } from '../models/offCanvas/slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    games: gamesReducer,
    offCanvas: offCanvasReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
