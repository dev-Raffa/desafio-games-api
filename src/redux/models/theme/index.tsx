'use client';

import lightTheme from '@/app/style/themes/light';
import { theme } from '@/types/theme';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: theme = lightTheme;

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    toggle: (state, action: PayloadAction<theme>) => {
      return (state = action.payload);
    }
  }
});

export const { toggle } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
