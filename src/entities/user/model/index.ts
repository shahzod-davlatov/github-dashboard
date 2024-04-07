import { createEffect, createStore, sample } from 'effector';

import { userLogin } from '@localStorages/user';

import { userRequest } from '../api';

export type User = Awaited<ReturnType<typeof userRequest>>['user'];

const userLoginFx = createEffect((login: string | null) => {
  userLogin.value = login;
});

export const fetchUserFx = createEffect(async (login: string | null) => {
  if (!login) {
    throw new Error('Login not found');
  }

  const { user } = await userRequest(login);

  return user;
});

export const $userLogin = createStore<string | null>(null);

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
