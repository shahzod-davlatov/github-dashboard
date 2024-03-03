import { Auth } from '@pages/auth'
import { Home } from '@pages/home'
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Readonly<RouteRecordRaw[]> = [
  { path: '/', component: Home },
  { path: '/auth', component: Auth },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
