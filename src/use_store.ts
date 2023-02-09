import { reduxSymbol } from './redux_symbol';
import { Store } from 'redux';
import { inject } from '@vue/runtime-core';

export const useStore = <T>() => {
  const store = inject(reduxSymbol) as Store<T>;

  if (!store) {
    throw new Error(
      "[vue3redux]: couldn't find a store, make sure you have provided it"
    );
  }

  return store;
};
