import type { Store, Unsubscribe } from 'redux';
import { useStore } from './use_store';

export const useSubscribe = <T extends Store>(
  listener: () => void
): Unsubscribe => {
  const store = useStore() as T;

  return store.subscribe.bind(listener);
};
