import type { Store, AnyAction } from 'redux';
import { useStore } from './use_store';
import type { Dispatch, ThunkDispatch } from '@reduxjs/toolkit';

export const useDispatch = <T extends Store>(): ThunkDispatch<
  T,
  undefined,
  AnyAction
> &
  Dispatch<AnyAction> => {
  const store = useStore() as T;
  return store.dispatch;
};
