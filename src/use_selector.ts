// @ts-nocheck

import { onUnmounted, reactive, toRefs } from '@vue/runtime-core';
import { Store } from 'redux';

import { useStore } from './use_store';
import { cloneDeep } from 'lodash-es';

export type StateOf<T extends Store> = ReturnType<T['getState']>;

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
export const useSelector = <T extends object>(
  selector: (state: StateOf<Store>) => T
) => {
  const store = useStore() as Store<T>;
  const prevState = selector(store.getState());

  const states = reactive(cloneDeep(prevState)) as T;

  function updateState() {
    const nextState = selector(store.getState());
    for (const key in nextState) {
      if (Object.prototype.hasOwnProperty.call(nextState, key)) {
        states[key] = cloneDeep(nextState[key]);
      }
    }
  }

  updateState();

  const unsubscribe = store.subscribe(updateState);

  onUnmounted(unsubscribe);

  return toRefs(states);
};
