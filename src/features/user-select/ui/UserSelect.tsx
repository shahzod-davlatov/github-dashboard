import { defineComponent, h } from 'vue';

import Avatar from 'primevue/avatar';
import Dropdown from 'primevue/dropdown';
import Skeleton from 'primevue/skeleton';

import { useQueries } from '@tanstack/vue-query';

import { useStore } from 'effector-vue/composition';

import { $user, $userLogin } from '@entities/user';

import { USER_SEARCH_QUERY_KEY } from '@constants/queryKeys';

import { savedUsers } from '@localStorages/user';

import { useGroupedUsers } from '../lib/useGroupedUsers';
import { fetchSavedUsersFx } from '../model/savedUsers';
import {
  $userSearch,
  fetchUserSearchFx,
  searchInput,
  selectUserLogin,
} from '../model/searchedUsers';

import type { DropdownFilterEvent } from 'primevue/dropdown';

import type { Group, GroupItem } from '../lib/group';

export const UserSelect = defineComponent(() => {
  const user = useStore($user);
  const userLogin = useStore($userLogin);
  const userSearch = useStore($userSearch);

  const queries = useQueries({
    queries: [
      {
        queryKey: [USER_SEARCH_QUERY_KEY, savedUsers],
        queryFn: () => fetchSavedUsersFx(Array.from(savedUsers.value)),
        enabled: () => Boolean(savedUsers.value.size),
      },
      {
        queryKey: [USER_SEARCH_QUERY_KEY, userSearch],
        queryFn: () => fetchUserSearchFx(String(userSearch.value)),
        enabled: () => Boolean(userSearch.value),
        refetchOnWindowFocus: false,
      },
    ],
    combine: (results) => ({
      isLoading: results.some((result) => result.isLoading),
    }),
  });

  const { groupedUsers } = useGroupedUsers();

  const handleSelect = (login: string) => {
    if (login === user.value?.login) {
      return;
    }

    selectUserLogin(login);
  };

  const handleFilter = (event: DropdownFilterEvent) => {
    searchInput(String(event.value));
  };

  return () =>
    h(
      Dropdown,
      {
        class: 'w-60',
        filter: true,
        loading: !userLogin.value || queries.value.isLoading,
        modelValue: userLogin.value,
        onFilter: handleFilter,
        'onUpdate:modelValue': handleSelect,
        optionGroupChildren: 'items',
        optionGroupLabel: 'label',
        optionLabel: 'name',
        optionValue: 'login',
        options: groupedUsers.value,
        resetFilterOnHide: true,
      },
      {
        option: (slotProps: { option: GroupItem }) => (
          <div class="flex items-center gap-x-2">
            <Avatar image={slotProps.option.avatarUrl} shape="circle" />
            <div class="font-normal">{slotProps.option.name}</div>
          </div>
        ),
        optiongroup: (slotProps: { option: Group }) => (
          <div class="text-xs font-light">{slotProps.option.label}</div>
        ),
        value: () => (
          <div class="flex items-center gap-x-2">
            {!user.value && <Skeleton shape="circle" size="1.25rem" />}
            {!user.value && <Skeleton width="100%" />}
            {user.value && (
              <Avatar image={user.value.avatarUrl} shape="circle" />
            )}
            {user.value && <div class="font-normal">{user.value.name}</div>}
          </div>
        ),
      }
    );
});
