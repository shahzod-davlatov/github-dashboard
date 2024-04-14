import { createEffect, createEvent, createStore, sample } from 'effector';

import { saveUserFx } from '@entities/saved-user';
import { $userLogin } from '@entities/user';
import { $viewer } from '@entities/viewer';

import { userSearchRequest } from '../api';

export type SearchedUsers = Awaited<
  ReturnType<typeof userSearchRequest>
>['search']['nodes'];

export const selectUserLogin = createEvent<string>();
export const searchInput = createEvent<string>();

export const fetchUserSearchFx = createEffect(async (query: string) => {
  const { search } = await userSearchRequest(query);

  return search.nodes;
});

export const $userSearch = createStore<null | string>(null);
export const $searchedUsers = createStore<SearchedUsers>(null);

sample({
  clock: fetchUserSearchFx.doneData,
  target: $searchedUsers,
});

sample({
  clock: selectUserLogin,
  target: $userLogin,
});

sample({
  clock: selectUserLogin,
  fn: () => null,
  target: [$userSearch, $searchedUsers],
});

sample({
  clock: selectUserLogin,
  source: $viewer,
  filter: (viewer, userLogin) => userLogin !== viewer?.login,
  fn: (_, userLogin) => userLogin,
  target: saveUserFx,
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
  target: $searchedUsers,
});
