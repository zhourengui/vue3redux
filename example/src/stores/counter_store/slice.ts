import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
  random: number;
}

const counterState: CounterState = {
  value: 0,
  random: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: counterState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});
