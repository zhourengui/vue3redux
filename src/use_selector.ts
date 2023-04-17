import { onUnmounted, ref, UnwrapRef } from '@vue/runtime-core';
import { Store } from 'redux';

import { useStore } from './use_store';

export type StateOf<T extends Store> = ReturnType<T['getState']>;

/**
 * Compare whether the previous state is consistent with the latest state
 * @param prevState - previous state
 * @param nextState - latest state
 */
function defaultCompare<T>(prevState: T, nextState: T) {
  return prevState === nextState;
}

/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} compare the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * <template>
 *   <p>Count is: {{ counter.value }}</p>
 * <template>
 *
 * <script setup>
 *  const counter = useSelector((state: RootState) => state.counter);
 * <script>
 */
export const useSelector = <T extends unknown>(
  selector: (state: StateOf<Store>) => T,
  compare = defaultCompare
) => {
  const store = useStore() as Store;
  const prevState = selector(store.getState());

  const stateRef = ref(prevState);

  function updateStateRef() {
    const nextState = selector(store.getState());
    if (!compare(prevState, nextState)) {
      stateRef.value = nextState as UnwrapRef<T>;
    }
  }

  updateStateRef();

  const unsubscribe = store.subscribe(updateStateRef);

  onUnmounted(unsubscribe);

  return stateRef;
};
