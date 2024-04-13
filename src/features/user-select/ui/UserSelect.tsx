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
  fetchUserSearchFx,
  searchInput,
  selectUserLogin,
} from '../model';

import type { DropdownFilterEvent } from 'primevue/dropdown';

import type { Group, GroupItem } from '../lib';

export const UserSelect = defineComponent(() => {
  const user = useStore($user);
  const userLogin = useStore($userLogin);
  const userSearch = useStore($userSearch);

  const { isLoading } = useQuery({
    enabled: () => Boolean(userSearch.value),
    queryFn: () => fetchUserSearchFx(String(userSearch.value)),
    queryKey: [USER_SEARCH_QUERY_KEY, userSearch],
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
        loading: !userLogin.value || isLoading.value,
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
