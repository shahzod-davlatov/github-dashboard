import { createEffect, createStore, sample } from 'effector';

import { userRepositoriesRequest } from '../api';

export type UserRepositories = Exclude<
  Awaited<ReturnType<typeof userRepositoriesRequest>>['user'],
  null
>['repositories']['nodes'];

export type UserRepositoriesPageInfo = Exclude<
  Awaited<ReturnType<typeof userRepositoriesRequest>>['user'],
  null
>['repositories']['pageInfo'];

export const fetchUserRepositoriesFx = createEffect(
  async (args: { after: null; login: string }) => {
    const { user } = await userRepositoriesRequest(args.login, args.after);

    return user!.repositories;
  }
);

export const $userRepositories = createStore<UserRepositories>(null);
export const $userRepositoriesPageInfo = createStore<UserRepositoriesPageInfo>({
  hasNextPage: false,
  endCursor: null,
});

sample({
  clock: fetchUserRepositoriesFx.doneData,
  fn: ({ nodes }) => nodes,
  target: $userRepositories,
});

sample({
  clock: fetchUserRepositoriesFx.doneData,
  fn: ({ pageInfo }) => pageInfo,
  target: $userRepositoriesPageInfo,
});
