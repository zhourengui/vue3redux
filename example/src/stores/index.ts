import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter_store/index';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
