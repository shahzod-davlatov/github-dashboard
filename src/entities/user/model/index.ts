import { createEffect, createStore, sample } from 'effector';

import { userLogin } from '@localStorages/user';

import { userRequest } from '../api';

export type User = Awaited<ReturnType<typeof userRequest>>['user'];

const userLoginFx = createEffect((login: string | null) => {
  userLogin.value = login;
});

export const fetchUserFx = createEffect(async (login: string) => {
  const { user } = await userRequest(login);

  return user;
});

export const $userLogin = createStore<string | null>(null);

export const $user = createStore<User>(null).on(
  fetchUserFx.doneData,
  (_, user) => user
);

sample({
  source: $userLogin,
  filter: (login) => login !== null,
  fn: (login) => String(login),
  target: [fetchUserFx],
});

sample({
  source: $userLogin,
  target: userLoginFx,
});
