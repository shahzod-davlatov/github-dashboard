import { App } from './App';
import { router } from './router';

import { createApp } from 'vue';

import { VueQueryPlugin } from '@tanstack/vue-query';

import './style.css';

const app = createApp(App);

app.use(router);
app.use(VueQueryPlugin);

app.mount('#app');
