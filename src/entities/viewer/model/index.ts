import { createEffect, createStore, sample } from 'effector';

import { userLogin } from '@localStorages/user';

import { $userLogin } from '@entities/user';

import { viewerRequest } from '../api';

export type Viewer = Awaited<ReturnType<typeof viewerRequest>>['viewer'];

export const fetchViewerFx = createEffect(async () => {
  const { viewer } = await viewerRequest();

  return viewer;
});

export const $viewer = createStore<Viewer | null>(null);

sample({
  clock: fetchViewerFx.doneData,
  target: $viewer,
});

sample({
  clock: $viewer,
  filter: (viewer) => Boolean(viewer?.login),
  fn: (viewer) => userLogin.value ?? viewer!.login,
  target: $userLogin,
});
