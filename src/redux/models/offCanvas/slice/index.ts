'use client';

import { createSlice } from '@reduxjs/toolkit';

interface offCanvas {
  isShow: boolean;
}

const initialState: offCanvas = {
  isShow: false
};

export const offCanvasSlice = createSlice({
  name: 'offCanvas',
  initialState: initialState,
  reducers: {
    setIsShowOffCanvas: (state) => {
      if (state.isShow === false) {
        state.isShow = true;
      } else {
        state.isShow = false;
      }
    }
  }
});

export const { setIsShowOffCanvas } = offCanvasSlice.actions;
export const offCanvasReducer = offCanvasSlice.reducer;
