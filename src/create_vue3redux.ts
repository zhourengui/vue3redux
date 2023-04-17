import { provide } from '@vue/runtime-core';
import { Store } from 'redux';

import { reduxSymbol } from './redux_symbol';

import type { App } from 'vue';

export interface Vue3ReduxPluginOptions<T> {
  store: Store<T>;
}

/**
 * Creates a vue3redux instance to be used by the application
 */
export function createVue3redux<T>() {
  const vue3redux = {
    install(app: App<Element>, options: Vue3ReduxPluginOptions<T>) {
      const store = options.store;

      if (!store) {
        throw new Error('[vue3redux]: store is not defined');
      }

      if (app) {
        app.provide(reduxSymbol, store);
      } else {
        provide(reduxSymbol, store);
      }
    },
  };

  return vue3redux;
}
