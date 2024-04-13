import { createEffect, createStore, sample } from 'effector';

import { userRequest } from '@entities/user';

import type { User } from '@entities/user';

export const fetchSavedUsersFx = createEffect(async (queries: string[]) => {
  const users = await Promise.all(queries.map(userRequest));

  return users.map(({ user }) => user);
});

export const $savedUsers = createStore<User[]>([]);

sample({
  clock: fetchSavedUsersFx.doneData,
  target: $savedUsers,
});
