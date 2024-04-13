import { computed } from 'vue';

import { useStore } from 'effector-vue/composition';

import { $viewer } from '@entities/viewer';

import { $userSearch } from '../model';

import type { Group } from './group';

export const usePersonalAccountGroup = () => {
  const viewer = useStore($viewer);
  const userSearch = useStore($userSearch);

  const personalAccountGroup = computed<Group | null>(() => {
    if (userSearch.value) {
      return null;
    }

    if (!viewer.value) {
      return null;
    }

    return {
      items: [
        {
          avatarUrl: viewer.value.avatarUrl,
          login: viewer.value.login,
          name: viewer.value.name ?? '',
        },
      ],
      label: 'Personal Account',
    };
  });

  return { personalAccountGroup };
};
