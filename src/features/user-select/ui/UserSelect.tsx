import { computed, defineComponent, h } from 'vue';

import Avatar from 'primevue/avatar';
import Dropdown from 'primevue/dropdown';
import Skeleton from 'primevue/skeleton';

import { useQueries, useQueryClient } from '@tanstack/vue-query';

import { useStore } from 'effector-vue/composition';

import { fetchSavedUsersFx } from '@entities/saved-user';
import { $user, $userLogin } from '@entities/user';
import { clearUserRepositories } from '@entities/user-repositories';
import { clearUserStars } from '@entities/user-stars';

import {
  USER_REPOSITORIES_KEY,
  USER_SEARCH_QUERY_KEY,
  USER_STARS_KEY,
} from '@constants/queryKeys';

import { savedUsers } from '@localStorages/user';

import { useGroupedUsers } from '../lib/useGroupedUsers';
import {
  $userSearch,
  fetchUserSearchFx,
  searchInput,
  selectUserLogin,
} from '../model';

import type { DropdownFilterEvent } from 'primevue/dropdown';

import type { Group, GroupItem } from '../lib/group';

export const UserSelect = defineComponent(() => {
  const queryClient = useQueryClient();

  const user = useStore($user);
  const userLogin = useStore($userLogin);
  const userSearch = useStore($userSearch);

  const savedUsersArray = computed(() => Array.from(savedUsers.value));

  const queries = useQueries({
    queries: [
      {
        queryKey: [USER_SEARCH_QUERY_KEY, savedUsersArray],
        queryFn: () => fetchSavedUsersFx(savedUsersArray.value),
        enabled: () => Boolean(savedUsers.value.size),
        refetchOnWindowFocus: false,
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

    queryClient.removeQueries({ queryKey: [USER_REPOSITORIES_KEY] });
    queryClient.removeQueries({ queryKey: [USER_STARS_KEY] });
    clearUserRepositories();
    clearUserStars();
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
