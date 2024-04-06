import { computed } from 'vue';

import { useStore } from 'effector-vue/composition';

import { $user } from '@entities/user';
import { $viewer } from '@entities/viewer';

import { $userSearch, $users } from '../model';

export const useGroupedUsers = () => {
  const viewer = useStore($viewer);
  const user = useStore($user);
  const users = useStore($users);
  const userSearch = useStore($userSearch);

  const groupedUsers = computed(() => {
    const groups = [
      {
        label: 'Personal Account',
        items: [
          {
            name: viewer.value?.name,
            login: viewer.value?.login,
            avatar: viewer.value?.avatarUrl,
          },
        ],
      },
    ];

    if (viewer.value?.id !== user.value?.id) {
      groups.push({
        label: 'Current Account',
        items: [
          {
            name: user.value?.name,
            login: user.value?.login,
            avatar: user.value?.avatarUrl,
          },
        ],
      });
    }

    if (userSearch.value) {
      groups.push({
        label: 'Search',
        items:
          users.value?.reduce<
            { name: string; login: string; avatar: string }[]
          >((acc, searchedUser) => {
            if (!searchedUser) {
              return acc;
            }

            if (
              'name' in searchedUser &&
              'login' in searchedUser &&
              'avatarUrl' in searchedUser
            ) {
              acc.push({
                name: searchedUser.name ?? '',
                login: searchedUser.login,
                avatar: searchedUser.avatarUrl,
              });
            }

            return acc;
          }, []) ?? [],
      });
    }

    return groups;
  });

  return { groupedUsers };
};
