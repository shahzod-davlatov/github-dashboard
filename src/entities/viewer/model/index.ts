import { createEffect, createStore, sample } from 'effector';

import { userLogin } from '@localStorages/user';

import { $userLogin } from '@entities/user';

import { viewerRequest } from '../api';

export type Viewer = Awaited<ReturnType<typeof viewerRequest>>['viewer'];

export const fetchViewerFx = createEffect(async () => {
  const { viewer } = await viewerRequest();

  return viewer;
});

export const $viewer = createStore<Viewer | null>(null).on(
  fetchViewerFx.doneData,
  (_, viewer) => viewer
);

sample({
  source: $viewer,
  fn: (viewer) => viewer?.login ?? userLogin.value,
  target: $userLogin,
});
