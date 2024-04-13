import { computed } from 'vue';

import { useStore } from 'effector-vue/composition';

import { $searchedUsers, $userSearch } from '../model';

import type { SearchedUsers } from '../model';

import type { Group, GroupItem } from './group';

const isUser = (
  user: Exclude<SearchedUsers, null>[number]
): user is GroupItem => Boolean(user);

export const useSearchedUsersGroup = () => {
  const userSearch = useStore($userSearch);
  const searchedUsers = useStore($searchedUsers);

  const searchedUsersGroup = computed<Group | null>(() => {
    if (!userSearch.value) {
      return null;
    }

    const groupItems = searchedUsers.value?.reduce<GroupItem[]>(
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

    return {
      items: groupItems ?? [],
      label: 'Search',
    };
  });

  return { searchedUsersGroup };
};
