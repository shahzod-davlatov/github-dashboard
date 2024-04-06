import { createEffect, createEvent, createStore, sample } from 'effector';

import { $userLogin } from '@entities/user';

import { userSearchRequest } from '../api';

export const selectUserLogin = createEvent<string>();
export const searchInput = createEvent<string>();

type Users = Awaited<ReturnType<typeof userSearchRequest>>['search']['nodes'];

export const fetchUserSearchFx = createEffect(async (query: string) => {
  const { search } = await userSearchRequest(query);

  return search.nodes;
});

export const $userSearch = createStore<string | null>(null);
export const $users = createStore<Users>(null).on(
  fetchUserSearchFx.doneData,
  (_, users) => users
);

sample({
  source: selectUserLogin,
  target: $userLogin,
});

sample({
  source: searchInput,
  target: $userSearch,
});

sample({
  source: searchInput,
  filter: (value) => value === '',
  fn: () => null,
  target: [$userSearch, $users],
});

sample({
  source: selectUserLogin,
  fn: () => null,
  target: [$userSearch, $users],
});
