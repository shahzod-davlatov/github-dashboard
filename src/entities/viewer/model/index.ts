import { createEffect, createStore } from 'effector';

import { createGate } from 'effector-vue/composition';

import { viewerRequest } from '../api';

export type Viewer = Awaited<ReturnType<typeof viewerRequest>>['viewer'];

export const ViewerGate = createGate({ name: 'Viewer' });

export const fetchViewerFx = createEffect(async () => {
  const { viewer } = await viewerRequest();

  return viewer;
});

export const $viewer = createStore<Viewer | null>(null).on(
  fetchViewerFx.doneData,
  (_, user) => user
);

$viewer.reset(ViewerGate.close);
