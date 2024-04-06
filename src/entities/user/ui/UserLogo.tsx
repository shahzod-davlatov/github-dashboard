import { defineComponent } from 'vue';

import Avatar from 'primevue/avatar';

import { useQuery } from '@tanstack/vue-query';

import { useGate, useStore } from 'effector-vue/composition';

import { $user, UserGate, fetchUserFx } from '../model';

export const UserLogo = defineComponent(() => {
  const user = useStore($user);

  useGate(UserGate, () => ({ id: 'User' }));

  useQuery({
    queryKey: ['user'],
    queryFn: () => fetchUserFx(),
  });

  return () => (
    <Avatar
      image={user.value?.avatarUrl}
      shape="circle"
      label={user.value?.avatarUrl ? undefined : 'YOU'}
    />
  );
});
