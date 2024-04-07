import { computed } from 'vue';

import { useStore } from 'effector-vue/composition';

import { $userOverview } from '@entities/user-overview';

export const useDashboardInfo = () => {
  const userOverview = useStore($userOverview);

  const dashboardInfo = computed(() => [
    {
      key: 'repositories',
      icon: 'icon-book-marked',
      text: `Repositories: ${String(userOverview.value?.repositories.totalCount ?? '')}`,
    },
    {
      key: 'stars',
      icon: 'icon-star',
      text: `Stars: ${String(userOverview.value?.starredRepositories.totalCount ?? '')}`,
    },
    {
      key: 'pinned',
      icon: 'icon-pin',
      text: `Pinned: ${String(userOverview.value?.pinnedItems.totalCount ?? '')}`,
    },
    {
      key: 'curated',
      icon: 'icon-cctv',
      text: `Curated: ${String(userOverview.value?.lists.totalCount ?? '')}`,
    },
    {
      key: 'watching',
      icon: 'icon-scan-eye',
      text: `Watching: ${String(userOverview.value?.watching.totalCount ?? '')}`,
    },
    {
      key: 'packages',
      icon: 'icon-package',
      text: `Packages: ${String(userOverview.value?.packages.totalCount ?? '')}`,
    },
    {
      key: 'projects',
      icon: 'icon-panels-top-left',
      text: `Projects: ${String(userOverview.value?.projects.totalCount ?? '')}`,
    },
    {
      key: 'followers',
      icon: 'icon-users',
      text: `Followers: ${String(userOverview.value?.followers.totalCount ?? '')}`,
    },
    {
      key: 'following',
      icon: 'icon-user',
      text: `Following: ${String(userOverview.value?.following.totalCount ?? '')}`,
    },
    {
      key: 'organizations',
      icon: 'icon-building-2',
      text: `Organizations: ${String(userOverview.value?.organizations.totalCount ?? '')}`,
    },
    {
      key: 'sponsoring',
      icon: 'icon-coins',
      text: `Sponsoring: ${String(userOverview.value?.sponsoring.totalCount ?? '')}`,
    },
    {
      key: 'sponsors',
      icon: 'icon-hand-coins',
      text: `Sponsors: ${String(userOverview.value?.sponsors.totalCount ?? '')}`,
    },
  ]);

  return { dashboardInfo };
};
