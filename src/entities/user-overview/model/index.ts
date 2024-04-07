import { createEffect, createStore, sample } from 'effector';

import { userOverviewRequest } from '../api';

export type UserOverview = Awaited<
  ReturnType<typeof userOverviewRequest>
>['user'];

export const fetchUserOverviewFx = createEffect(async (login: string) => {
  const { user } = await userOverviewRequest(login);

  return user;
});

export const $userOverview = createStore<UserOverview>(null);

sample({
  clock: fetchUserOverviewFx.doneData,
  target: $userOverview,
});
