import { computed } from 'vue';

import { useStore } from 'effector-vue/composition';

import { $user } from '@entities/user';
import { $viewer } from '@entities/viewer';

import { $userSearch, $users } from '../model';

import type { Users } from '../model';

export type GroupItem = {
  avatarUrl: string;
  login: string;
  name: string;
};

export type Group = {
  items: GroupItem[];
  label: string;
};

const isUser = (user: Exclude<Users, null>[number]): user is GroupItem =>
  Boolean(user);

export const useGroupedUsers = () => {
  const viewer = useStore($viewer);
  const user = useStore($user);
  const users = useStore($users);
  const userSearch = useStore($userSearch);

  const groupedUsers = computed<Group[]>(() => {
    const groups = [
      {
        items: [
          {
            avatarUrl: viewer.value?.avatarUrl ?? '',
            login: viewer.value?.login ?? '',
            name: viewer.value?.name ?? '',
          },
        ],
        label: 'Personal Account',
      },
    ];

    if (viewer.value?.id !== user.value?.id) {
      groups.push({
        items: [
          {
            avatarUrl: user.value?.avatarUrl ?? '',
            login: user.value?.login ?? '',
            name: user.value?.name ?? '',
          },
        ],
        label: 'Current Account',
      });
    }

    if (userSearch.value) {
      const groupItems = users.value?.reduce<GroupItem[]>(
        (acc, searchedUser) => {
          if (!searchedUser) {
            return acc;
          }

          if (!isUser(searchedUser)) {
            return acc;
          }

          acc.push({
            avatarUrl: searchedUser.avatarUrl,
            login: searchedUser.login,
            name: searchedUser.name,
          });

          return acc;
        },
        []
      );

      groups.push({
        items: groupItems ?? [],
        label: 'Search',
      });
    }

    return groups;
  });

  return { groupedUsers };
};
