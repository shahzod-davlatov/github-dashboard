import { createEffect, createStore } from 'effector';

import { createGate } from 'effector-vue/composition';

import { userRequest } from '../api';

export type User = Awaited<ReturnType<typeof userRequest>>['viewer'];

export const UserGate = createGate({ name: 'User' });

export const fetchUserFx = createEffect(async () => {
  const { viewer } = await userRequest();

  return viewer;
});

export const $user = createStore<User | null>(null).on(
  fetchUserFx.doneData,
  (_, user) => user
);

$user.reset(UserGate.close);
