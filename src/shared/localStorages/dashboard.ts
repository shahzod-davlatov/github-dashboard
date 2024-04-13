import { useLocalStorage } from '@vueuse/core';

import { DASHBOARD_KEYS } from '@constants/dashboardKeys';
import { VISIBLE_DASHBOARD_CARDS } from '@constants/storageKeys';

export const visibleDashboardCards = useLocalStorage(
  VISIBLE_DASHBOARD_CARDS,
  new Set(DASHBOARD_KEYS)
);
