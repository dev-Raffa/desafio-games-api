'use client';

import darkTheme from '@/app/style/themes/dark';
import lightTheme from '@/app/style/themes/light';
import { themeContext } from '@/types/theme';
import { createSlice } from '@reduxjs/toolkit';

const initialState: themeContext = {
  theme: lightTheme
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    toggle: (state) =>  {
      if (state.theme.title == 'light') {
         state.theme = darkTheme;
      } else if (state.theme.title == 'dark') {
         state.theme = lightTheme;
      }
      
    }
  }
});

export const { toggle } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
