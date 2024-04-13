import { createEvent, createStore, sample } from 'effector';

import type { DASHBOARD_KEYS } from '@constants/dashboardKeys';

export const selectInfo = createEvent<(typeof DASHBOARD_KEYS)[number] | null>();

export const $selectedInfo = createStore<
  (typeof DASHBOARD_KEYS)[number] | null
>(null);

sample({
  clock: selectInfo,
  fn: (selectedInfo) => selectedInfo ?? null,
  target: $selectedInfo,
});
