import { computed } from 'vue';

import { useStore } from 'effector-vue/composition';

import { $userOverview } from '@entities/user-overview';

export const useDashboardInfo = () => {
  const userOverview = useStore($userOverview);

  const dashboardInfo = computed(() => [
    {
      icon: 'icon-book-marked',
      key: 'repositories',
      text: `Repositories: ${String(userOverview.value?.repositories.totalCount ?? '')}`,
    },
    {
      icon: 'icon-star',
      key: 'stars',
      text: `Stars: ${String(userOverview.value?.starredRepositories.totalCount ?? '')}`,
    },
    {
      icon: 'icon-pin',
      key: 'pinned',
      text: `Pinned: ${String(userOverview.value?.pinnedItems.totalCount ?? '')}`,
    },
    {
      icon: 'icon-cctv',
      key: 'curated',
      text: `Curated: ${String(userOverview.value?.lists.totalCount ?? '')}`,
    },
    {
      icon: 'icon-scan-eye',
      key: 'watching',
      text: `Watching: ${String(userOverview.value?.watching.totalCount ?? '')}`,
    },
    {
      icon: 'icon-package',
      key: 'packages',
      text: `Packages: ${String(userOverview.value?.packages.totalCount ?? '')}`,
    },
    {
      icon: 'icon-panels-top-left',
      key: 'projects',
      text: `Projects: ${String(userOverview.value?.projects.totalCount ?? '')}`,
    },
    {
      icon: 'icon-users',
      key: 'followers',
      text: `Followers: ${String(userOverview.value?.followers.totalCount ?? '')}`,
    },
    {
      icon: 'icon-user',
      key: 'following',
      text: `Following: ${String(userOverview.value?.following.totalCount ?? '')}`,
    },
    {
      icon: 'icon-building-2',
      key: 'organizations',
      text: `Organizations: ${String(userOverview.value?.organizations.totalCount ?? '')}`,
    },
    {
      icon: 'icon-coins',
      key: 'sponsoring',
      text: `Sponsoring: ${String(userOverview.value?.sponsoring.totalCount ?? '')}`,
    },
    {
      icon: 'icon-hand-coins',
      key: 'sponsors',
      text: `Sponsors: ${String(userOverview.value?.sponsors.totalCount ?? '')}`,
    },
  ]);

  return { dashboardInfo };
};
