import { createEffect, createEvent, createStore, sample } from 'effector';

import { $userLogin } from '@entities/user';

import { userSearchRequest } from '../api';

export const selectUserLogin = createEvent<string>();
export const searchInput = createEvent<string>();

export type Users = Awaited<
  ReturnType<typeof userSearchRequest>
>['search']['nodes'];

export const fetchUserSearchFx = createEffect(async (query: string) => {
  const { search } = await userSearchRequest(query);

  return search.nodes;
});

export const $userSearch = createStore<null | string>(null);
export const $users = createStore<Users>(null);

sample({
  clock: fetchUserSearchFx.doneData,
  target: $users,
});

sample({
  clock: selectUserLogin,
  target: $userLogin,
});

sample({
  clock: selectUserLogin,
  fn: () => null,
  target: [$userSearch, $users],
});

sample({
  clock: searchInput,
  fn: (input) => (input === '' ? null : input),
  target: $userSearch,
});

sample({
  clock: $userSearch,
  filter: (search) => search === null,
  fn: (search) => search as null,
  target: $users,
});
