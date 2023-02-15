import type { Store, Unsubscribe } from 'redux';
import { useStore } from './use_store';

export const useSubscribe = <T extends Store>(): ((
  listener: () => void,
  disposed: (unsubscribe: Unsubscribe) => void
) => void) => {
  const store = useStore() as T;
  const subscribe = store.subscribe;

  return (listener, disposed) => {
    const unsubscribe = subscribe(listener);
    disposed(unsubscribe);
  };
};
