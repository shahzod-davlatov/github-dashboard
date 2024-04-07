import { defineComponent, h } from 'vue';

import Avatar from 'primevue/avatar';
import Dropdown from 'primevue/dropdown';
import Skeleton from 'primevue/skeleton';

import { useQuery } from '@tanstack/vue-query';

import { useStore } from 'effector-vue/composition';

import { $user, $userLogin } from '@entities/user';

import { USER_SEARCH_QUERY_KEY } from '@constants/queryKeys';

import { useGroupedUsers } from '../lib';
import {
  $userSearch,
  selectUserLogin,
  searchInput,
  fetchUserSearchFx,
} from '../model';

import type { Group, GroupItem } from '../lib';
import type { DropdownFilterEvent } from 'primevue/dropdown';

export const UserSelect = defineComponent(() => {
  const user = useStore($user);
  const userLogin = useStore($userLogin);
  const userSearch = useStore($userSearch);

  const { isLoading } = useQuery({
    queryKey: [USER_SEARCH_QUERY_KEY, userSearch],
    queryFn: () => fetchUserSearchFx(String(userSearch.value)),
    enabled: () => Boolean(userSearch.value),
  });

  const { groupedUsers } = useGroupedUsers();

  const handleSelect = (login: string) => {
    if (login === user.value?.login) {
      return;
    }

    selectUserLogin(login);
  };

  const handleFilter = (event: DropdownFilterEvent) => {
    searchInput(event.value);
  };

  return () =>
    h(
      Dropdown,
      {
        modelValue: userLogin.value,
        options: groupedUsers.value,
        optionLabel: 'name',
        optionValue: 'login',
        optionGroupLabel: 'label',
        optionGroupChildren: 'items',
        class: 'w-60',
        loading: !userLogin.value || isLoading.value,
        filter: true,
        resetFilterOnHide: true,
        'onUpdate:modelValue': handleSelect,
        onFilter: handleFilter,
      },
      {
        optiongroup: (slotProps: { option: Group }) => (
          <div class="text-xs font-light">{slotProps.option.label}</div>
        ),
        option: (slotProps: { option: GroupItem }) => (
          <div class="flex items-center gap-x-2">
            <Avatar image={slotProps.option.avatarUrl} shape="circle" />
            <div class="font-normal">{slotProps.option.name}</div>
          </div>
        ),
        value: () => (
          <div class="flex items-center gap-x-2">
            {!user.value && <Skeleton size="1.25rem" shape="circle" />}
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
