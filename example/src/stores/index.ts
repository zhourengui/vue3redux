import { configureStore } from '@reduxjs/toolkit';

import { demoSlice } from './demo_store';

export const store = configureStore({
  reducer: {
    demo: demoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export * from './demo_store';
