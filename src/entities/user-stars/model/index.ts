import { createEffect, createEvent, createStore, sample } from 'effector';

import { userStarsRequest } from '../api';

export type UserStars = Exclude<
  Awaited<ReturnType<typeof userStarsRequest>>['user'],
  null
>['starredRepositories']['nodes'];

export type UserStarsPageInfo = Exclude<
  Awaited<ReturnType<typeof userStarsRequest>>['user'],
  null
>['starredRepositories']['pageInfo'];

export const clearUserStars = createEvent();

export const fetchUserStarsFx = createEffect(
  async (args: { after: null | string; login: string }) => {
    const { user } = await userStarsRequest(args.login, args.after);

    return user!.starredRepositories;
  }
);

export const $userStars = createStore<UserStars>(null);
export const $userStarsPageInfo = createStore<UserStarsPageInfo>({
  hasNextPage: false,
  endCursor: null,
});

sample({
  clock: fetchUserStarsFx.doneData,
  source: $userStars,
  fn: (previous, { nodes }) => {
    if (previous) {
      return [...previous, ...nodes!];
    }

    return nodes;
  },
  target: $userStars,
});

sample({
  clock: fetchUserStarsFx.doneData,
  fn: ({ pageInfo }) => pageInfo,
  target: $userStarsPageInfo,
});

sample({
  clock: clearUserStars,
  fn: () => null,
  target: [$userStars, $userStarsPageInfo],
});
