import { defineComponent } from 'vue';

import Avatar from 'primevue/avatar';

import { useQuery } from '@tanstack/vue-query';

import { useGate, useStore } from 'effector-vue/composition';

import { $viewer, ViewerGate, fetchViewerFx } from '../model';

export const ViewerLogo = defineComponent(() => {
  const user = useStore($viewer);

  useGate(ViewerGate, () => ({ id: 'Viewer' }));

  useQuery({
    queryKey: ['viewer'],
    queryFn: () => fetchViewerFx(),
  });

  return () => (
    <Avatar
      image={user.value?.avatarUrl}
      shape="circle"
      label={user.value?.avatarUrl ? undefined : 'YOU'}
    />
  );
});
