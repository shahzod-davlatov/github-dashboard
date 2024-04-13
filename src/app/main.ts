import { createApp } from 'vue';

import PrimeVue from 'primevue/config';

import { VueQueryPlugin } from '@tanstack/vue-query';

import { App } from './App';
import PrimeVuePreset from './primeVuePreset';
import { router } from './router';

import 'lucide-static/font/lucide.css';
import './style.css';

const app = createApp(App);

app.use(router);
app.use(VueQueryPlugin);
app.use(PrimeVue, {
  pt: PrimeVuePreset,
  unstyled: true,
});

app.mount('#app');
