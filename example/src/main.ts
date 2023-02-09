import { createApp } from '@vue/runtime-dom';
import { createVue3redux } from '@zhourengui/vue3redux';

import App from './app.vue';
import { store } from './stores';

import './style.css';

const vue3redux = createVue3redux();

const app = createApp(App);

app.use(vue3redux, { store: store });

app.mount('#app');
