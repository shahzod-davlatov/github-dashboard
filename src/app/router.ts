import { createRouter, createWebHistory } from 'vue-router';

import { authToken } from '@localStorages/tokens';

import { Auth } from '@pages/auth';
import { Home } from '@pages/home';
import { Repositories } from '@pages/repositories';
import { Stars } from '@pages/stars';

import { APP_ROUTES } from '@constants/routes';

import { routerInstance } from '@lib/router';

import type { RouteRecordRaw } from 'vue-router';

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    component: Home,
    name: APP_ROUTES.HOME,
  },
  {
    path: '/auth',
    component: Auth,
    name: APP_ROUTES.AUTH,
  },
  {
    path: '/repositories',
    component: Repositories,
    name: APP_ROUTES.REPOSITORIES,
  },
  {
    path: '/stars',
    component: Stars,
    name: APP_ROUTES.STARS,
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

routerInstance.value = router;

export { router };
