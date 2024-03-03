import App from './App.vue'
import { router } from './router'

import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'

import './style.css'

const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin)

app.mount('#app')
