import { createEffect, createStore, sample } from 'effector';

import { savedUsers } from '@localStorages/user';

import { savedUserRequest } from '../api';

export type SavedUser = Awaited<ReturnType<typeof savedUserRequest>>['user'];

export const saveUserFx = createEffect(
  (login: Exclude<SavedUser, null>['login']) => {
    savedUsers.value.add(login);
  }
);

export const fetchSavedUsersFx = createEffect(async (queries: string[]) => {
  const users = await Promise.all(queries.map(savedUserRequest));

  return users.map(({ user }) => user);
});

export const $savedUsers = createStore<SavedUser[]>([]);

sample({
  clock: fetchSavedUsersFx.doneData,
  target: $savedUsers,
});
