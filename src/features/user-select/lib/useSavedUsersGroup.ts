import { computed } from 'vue';

import { useStore } from 'effector-vue/composition';

import { $user } from '@entities/user';

import { $savedUsers } from '../model/savedUsers';
import { $userSearch } from '../model/searchedUsers';

import type { Group, GroupItem } from './group';

export const useSavedUsersGroup = () => {
  const user = useStore($user);
  const savedUsers = useStore($savedUsers);
  const userSearch = useStore($userSearch);

  const savedUsersGroup = computed<Group | null>(() => {
    if (Boolean(userSearch.value) || !savedUsers.value.length) {
      return null;
    }

    const groupItems = savedUsers.value.reduce<GroupItem[]>(
      (acc, savedUser) => {
        if (!savedUser) {
          return acc;
        }

        if (savedUser.id === user.value?.id) {
          return acc;
        }

        acc.push({
          avatarUrl: savedUser.avatarUrl,
          login: savedUser.login,
          name: savedUser.name ?? '',
        });

        return acc;
      },
      []
    );

    if (!groupItems.length) {
      return null;
    }

    return {
      items: groupItems,
      label: 'Saved accounts',
    };
  });

  return { savedUsersGroup };
};
