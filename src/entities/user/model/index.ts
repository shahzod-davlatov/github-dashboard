import { createEffect, createStore, sample } from 'effector';

import { userLogin } from '@localStorages/user';

import { userRequest } from '../api';

export type User = Awaited<ReturnType<typeof userRequest>>['user'];

const userLoginFx = createEffect((login: null | string) => {
  userLogin.value = login;
});

export const fetchUserFx = createEffect(async (login: null | string) => {
  if (!login) {
    throw new Error('Login not found');
  }

  const { user } = await userRequest(login);

  return user;
});

export const $userLogin = createStore<null | string>(null);

export const $user = createStore<User>(null);

sample({
  clock: fetchUserFx.doneData,
  target: $user,
});

sample({
  clock: $userLogin,
  filter: (login) => login !== null,
  target: [fetchUserFx, userLoginFx],
});
