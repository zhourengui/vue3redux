import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface DemoState {
  counter: number;
  random: number;
  author: {
    name: string;
    github: string;
  };
}

const demoState: DemoState = {
  counter: 0,
  random: 0,
  author: {
    name: 'Rengui Zhou',
    github: 'https://github.com/zhourengui',
  },
};

export const demoSlice = createSlice({
  name: 'demo',
  initialState: demoState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
    restoreAuthor: (
      state,
      action: PayloadAction<{ name: string; github: string }>
    ) => {
      state.author = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, restoreAuthor } =
  demoSlice.actions;
