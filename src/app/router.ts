import { PageAuth } from '@pages/auth';
import { PageHome } from '@pages/home';
import { PageRepositories } from '@pages/repositories';
import { PageStars } from '@pages/stars';

import { AppRoutes } from '@constants/routes';
import { authToken } from '@constants/tokens';

import { createRouter, createWebHistory } from 'vue-router';

import type { RouteRecordRaw } from 'vue-router';

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    component: PageHome,
    name: AppRoutes.Home,
  },
  {
    path: '/auth',
    component: PageAuth,
    name: AppRoutes.Auth,
  },
  {
    path: '/repositories',
    component: PageRepositories,
    name: AppRoutes.Repositories,
  },
  {
    path: '/stars',
    component: PageStars,
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

export { router };
