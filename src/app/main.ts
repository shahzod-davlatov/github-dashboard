import App from './App.vue'
import { router } from './router'

import { VueEffector } from 'effector-vue'
import { createApp } from 'vue'

import './style.css'

const app = createApp(App)

app.use(router)
app.use(VueEffector)

app.mount('#app')
