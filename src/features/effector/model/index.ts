import { effectorRequest } from '../api/query';

import { createStore, createEvent, sample, createEffect } from 'effector';

import { createGate } from 'effector-vue/composition';

type Viewer = Awaited<ReturnType<typeof effectorRequest>>['viewer'];

export const EffectorGate = createGate({
  name: 'Effector',
});

export const fetchViewerFx = createEffect(async (size: number) => {
  const { viewer } = await effectorRequest(size);

  return viewer;
});

export const $viewer = createStore<Viewer | null>(null).on(
  fetchViewerFx.doneData,
  (_, viewer) => viewer
);

export const $size = createStore(100);

export const increment = createEvent();
export const decrement = createEvent();

sample({
  clock: increment,
  source: $size,
  fn: (size) => size + 100,
  target: $size,
});

sample({
  clock: decrement,
  source: $size,
  fn: (size) => size - 100,
  target: $size,
});

$size.reset(EffectorGate.close);
$viewer.reset(EffectorGate.close);
