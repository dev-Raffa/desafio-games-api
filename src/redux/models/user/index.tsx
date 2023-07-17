'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { user } from '@/types/user';

const initialState: user = {
  name: null,
  userId: null,
  isLogged: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<user>) => {
      state.name = action.payload.name;
      state.userId = action.payload.userId;
      state.isLogged = true;
    },
    logout: (state) => {
      state.name = null;
      state.userId = null;
      state.isLogged = false;
    }
  }
});

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
