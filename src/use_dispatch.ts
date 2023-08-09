import type { Store, AnyAction } from 'redux';
import { useStore } from './use_store';
import type { Dispatch, ThunkDispatch } from '@reduxjs/toolkit';

/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * <script setup>
 *  import { useDispatch } from 'vue3redux';
 *  const dispatch = useDispatch();
 *  dispatch(increment())
 * <script>
 */
export const useDispatch = <T extends Store>(): ThunkDispatch<
  T,
  undefined,
  AnyAction
> &
  Dispatch<AnyAction> => {
  const store = useStore() as T;
  return store.dispatch;
};
