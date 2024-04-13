import type { DASHBOARD_KEYS } from '@constants/dashboardKeys';

type DashboardInfo = {
  icon: string;
  key: (typeof DASHBOARD_KEYS)[number];
};

export const dashboardInfoMap: DashboardInfo[] = [
  {
    icon: 'icon-book-marked',
    key: 'repositories',
  },
  {
    icon: 'icon-star',
    key: 'stars',
  },
  {
    icon: 'icon-pin',
    key: 'pinned',
  },
  {
    icon: 'icon-cctv',
    key: 'curated',
  },
  {
    icon: 'icon-scan-eye',
    key: 'watching',
  },
  {
    icon: 'icon-package',
    key: 'packages',
  },
  {
    icon: 'icon-panels-top-left',
    key: 'projects',
  },
  {
    icon: 'icon-users',
    key: 'followers',
  },
  {
    icon: 'icon-user',
    key: 'following',
  },
  {
    icon: 'icon-building-2',
    key: 'organizations',
  },
  {
    icon: 'icon-coins',
    key: 'sponsoring',
  },
  {
    icon: 'icon-hand-coins',
    key: 'sponsors',
  },
];
