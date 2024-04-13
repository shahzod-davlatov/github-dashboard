import { computed } from 'vue';

import { useStore } from 'effector-vue/composition';

import { $user } from '@entities/user';
import { $viewer } from '@entities/viewer';

import { $userSearch } from '../model/searchedUsers';

import type { Group } from './group';

export const useCurrentAccountGroup = () => {
  const viewer = useStore($viewer);
  const user = useStore($user);
  const userSearch = useStore($userSearch);

  const currentAccountGroup = computed<Group | null>(() => {
    if (userSearch.value) {
      return null;
    }

    if (!viewer.value || !user.value) {
      return null;
    }

    if (viewer.value.id === user.value.id) {
      return null;
    }

    return {
      items: [
        {
          avatarUrl: user.value.avatarUrl,
          login: user.value.login,
          name: user.value.name ?? '',
        },
      ],
      label: 'Current Account',
    };
  });

  return { currentAccountGroup };
};
