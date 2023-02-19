import { onUnmounted, ref, UnwrapRef } from '@vue/runtime-core';
import { Store } from 'redux';

import { useStore } from './use_store';

export type StateOf<T extends Store> = ReturnType<T['getState']>;

function defaultCompare<T>(prevState: T, nextState: T) {
  return prevState === nextState;
}

export const useSelector = <T extends Object>(
  selector: (state: StateOf<Store>) => T,
  compare = defaultCompare
) => {
  const store = useStore() as Store;
  const prevState = selector(store.getState());

  const stateRef = ref(prevState);

  function updateStateRef() {
    const nextState = selector(store.getState());
    if (!compare(prevState, nextState)) {
      stateRef.value = nextState as UnwrapRef<T[keyof T]>;
    }
  }

  updateStateRef();

  const unsubscribe = store.subscribe(updateStateRef);

  onUnmounted(unsubscribe);

  return stateRef;
};
