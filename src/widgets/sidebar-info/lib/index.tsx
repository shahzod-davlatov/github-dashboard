import { defineAsyncComponent } from 'vue';

import type { DASHBOARD_KEYS } from '@constants/dashboardKeys';

const AsyncUserRepositories = defineAsyncComponent(() =>
  import('@features/user-repositories').then(
    (module) => module.UserRepositories
  )
);
const AsyncUserStars = defineAsyncComponent(() =>
  import('@features/user-stars').then((module) => module.UserStars)
);

export const getSidebarHeader = (
  key: (typeof DASHBOARD_KEYS)[number] | null
) => {
  switch (key) {
    case 'repositories':
      return 'Repositories';
    case 'stars':
      return 'Stars';
    // case 'pinned':
    //   return 'Pinned';
    // case 'curated':
    //   return 'Curated';
    // case 'watching':
    //   return 'Watching';
    // case 'packages':
    //   return 'Packages';
    // case 'projects':
    //   return 'Projects';
    // case 'followers':
    //   return 'Followers';
    // case 'following':
    //   return 'Following';
    // case 'organizations':
    //   return 'Organizations';
    // case 'sponsoring':
    //   return 'Sponsoring';
    // case 'sponsors':
    //   return 'Sponsors';
    default:
      return '';
  }
};

export const getSidebarContent = (
  key: (typeof DASHBOARD_KEYS)[number] | null
) => {
  switch (key) {
    case 'repositories':
      return <AsyncUserRepositories />;
    case 'stars':
      return <AsyncUserStars />;
    // case 'pinned':
    //   return 'Pinned';
    // case 'curated':
    //   return 'Curated';
    // case 'watching':
    //   return 'Watching';
    // case 'packages':
    //   return 'Packages';
    // case 'projects':
    //   return 'Projects';
    // case 'followers':
    //   return 'Followers';
    // case 'following':
    //   return 'Following';
    // case 'organizations':
    //   return 'Organizations';
    // case 'sponsoring':
    //   return 'Sponsoring';
    // case 'sponsors':
    //   return 'Sponsors';
    default:
      return null;
  }
};
