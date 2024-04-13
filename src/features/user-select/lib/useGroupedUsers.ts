import { computed } from 'vue';

import { useCurrentAccountGroup } from './useCurrentAccountGroup';
import { usePersonalAccountGroup } from './usePersonalAccountGroup';
import { useSavedUsersGroup } from './useSavedUsersGroup';
import { useSearchedUsersGroup } from './useSearchedUsersGroup';

import type { Group } from './group';

export const useGroupedUsers = () => {
  const { personalAccountGroup } = usePersonalAccountGroup();
  const { currentAccountGroup } = useCurrentAccountGroup();
  const { savedUsersGroup } = useSavedUsersGroup();
  const { searchedUsersGroup } = useSearchedUsersGroup();

  const groupedUsers = computed<Group[]>(() => {
    const groups: Group[] = [];

    if (personalAccountGroup.value) {
      groups.push(personalAccountGroup.value);
    }

    if (currentAccountGroup.value) {
      groups.push(currentAccountGroup.value);
    }

    if (savedUsersGroup.value) {
      groups.push(savedUsersGroup.value);
    }

    if (searchedUsersGroup.value) {
      groups.push(searchedUsersGroup.value);
    }

    return groups;
  });

  return { groupedUsers };
};
