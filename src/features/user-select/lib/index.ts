import { computed } from 'vue';

import { useStore } from 'effector-vue/composition';

import { $user } from '@entities/user';
import { $viewer } from '@entities/viewer';

import { $userSearch, $users } from '../model';

import type { Users } from '../model';

export type GroupItem = {
  name: string;
  login: string;
  avatarUrl: string;
};

export type Group = {
  label: string;
  items: GroupItem[];
};

const isUser = (
  user: Exclude<Users, null | undefined>[number]
): user is GroupItem => Boolean(user);

export const useGroupedUsers = () => {
  const viewer = useStore($viewer);
  const user = useStore($user);
  const users = useStore($users);
  const userSearch = useStore($userSearch);

  const groupedUsers = computed<Group[]>(() => {
    const groups = [
      {
        label: 'Personal Account',
        items: [
          {
            name: viewer.value?.name ?? '',
            login: viewer.value?.login ?? '',
            avatarUrl: viewer.value?.avatarUrl ?? '',
          },
        ],
      },
    ];

    if (viewer.value?.id !== user.value?.id) {
      groups.push({
        label: 'Current Account',
        items: [
          {
            name: user.value?.name ?? '',
            login: user.value?.login ?? '',
            avatarUrl: user.value?.avatarUrl ?? '',
          },
        ],
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
            name: searchedUser.name,
            login: searchedUser.login,
            avatarUrl: searchedUser.avatarUrl,
          });

          return acc;
        },
        []
      );

      groups.push({
        label: 'Search',
        items: groupItems ?? [],
      });
    }

    return groups;
  });

  return { groupedUsers };
};
