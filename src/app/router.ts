import { createRouter, createWebHistory } from 'vue-router';

import { Auth } from '@pages/auth';
import { Home } from '@pages/home';

import { APP_ROUTES } from '@constants/routes';

import { routerInstance } from '@lib/router';

import { authToken } from '@localStorages/tokens';

import type { RouteRecordRaw } from 'vue-router';

const routes: Readonly<RouteRecordRaw[]> = [
  {
    component: Home,
    name: APP_ROUTES.HOME,
    path: '/',
  },
  {
    component: Auth,
    name: APP_ROUTES.AUTH,
    path: '/auth',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  if (!authToken.value && to.name !== APP_ROUTES.AUTH) {
    return { name: APP_ROUTES.AUTH };
  }
});

routerInstance.instance = router;

export { router };
