import { createRouter, createWebHistory } from 'vue-router';

import { Auth } from '@pages/auth';
import { Home } from '@pages/home';
import { Repositories } from '@pages/repositories';
import { Stars } from '@pages/stars';

import { AppRoutes } from '@constants/routes';
import { authToken } from '@constants/tokens';

import { routerInstance } from '@lib/router';

import type { RouteRecordRaw } from 'vue-router';

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    component: Home,
    name: AppRoutes.Home,
  },
  {
    path: '/auth',
    component: Auth,
    name: AppRoutes.Auth,
  },
  {
    path: '/repositories',
    component: Repositories,
    name: AppRoutes.Repositories,
  },
  {
    path: '/stars',
    component: Stars,
    name: AppRoutes.Stars,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  if (!authToken.value && to.name !== AppRoutes.Auth) {
    return { name: AppRoutes.Auth };
  }
});

routerInstance.value = router;

export { router };
