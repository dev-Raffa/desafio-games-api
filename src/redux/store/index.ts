'use client';

import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../slices/user';
import logger from 'redux-logger';
import { themeReducer } from '../slices/theme';
import { gamesReducer } from '../slices/games';

export const store = configureStore({
  reducer: { user: userReducer, theme: themeReducer, games: gamesReducer },
  middleware: [logger]
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
