import { computed } from 'vue';

import { useStore } from 'effector-vue/composition';

import { $userOverview } from '@entities/user-overview';

import { dashboardInfoMap } from '@lib/dashboardInfo';

import type { DASHBOARD_KEYS } from '@constants/dashboardKeys';

type DashboardInfo = {
  icon: string;
  key: (typeof DASHBOARD_KEYS)[number];
  text: string;
};

export const useDashboardInfo = () => {
  const userOverview = useStore($userOverview);

  const dashboardInfo = computed<DashboardInfo[]>(() =>
    dashboardInfoMap.map(({ icon, key }) => {
      let text: string;

      switch (key) {
        case 'repositories':
          text = `Repositories: ${String(userOverview.value?.repositories.totalCount ?? '')}`;
          break;
        case 'stars':
          text = `Stars: ${String(userOverview.value?.starredRepositories.totalCount ?? '')}`;
          break;
        case 'pinned':
          text = `Pinned: ${String(userOverview.value?.pinnedItems.totalCount ?? '')}`;
          break;
        case 'curated':
          text = `Curated: ${String(userOverview.value?.lists.totalCount ?? '')}`;
          break;
        case 'watching':
          text = `Watching: ${String(userOverview.value?.watching.totalCount ?? '')}`;
          break;
        case 'packages':
          text = `Packages: ${String(userOverview.value?.packages.totalCount ?? '')}`;
          break;
        case 'projects':
          text = `Projects: ${String(userOverview.value?.projects.totalCount ?? '')}`;
          break;
        case 'followers':
          text = `Followers: ${String(userOverview.value?.followers.totalCount ?? '')}`;
          break;
        case 'following':
          text = `Following: ${String(userOverview.value?.following.totalCount ?? '')}`;
          break;
        case 'organizations':
          text = `Organizations: ${String(userOverview.value?.organizations.totalCount ?? '')}`;
          break;
        case 'sponsoring':
          text = `Sponsoring: ${String(userOverview.value?.sponsoring.totalCount ?? '')}`;
          break;
        case 'sponsors':
          text = `Sponsors: ${String(userOverview.value?.sponsors.totalCount ?? '')}`;
          break;
        default:
          text = '';
      }

      return { icon, key, text };
    })
  );

  return { dashboardInfo };
};
