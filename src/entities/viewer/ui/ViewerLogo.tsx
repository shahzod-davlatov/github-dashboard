import { defineComponent } from 'vue';

import Avatar from 'primevue/avatar';

import { useQuery } from '@tanstack/vue-query';

import { useStore } from 'effector-vue/composition';

import { VIEWER_QUERY_KEY } from '@constants/queryKeys';

import { $viewer, fetchViewerFx } from '../model';

export const ViewerLogo = defineComponent(() => {
  const viewer = useStore($viewer);

  useQuery({
    queryKey: [VIEWER_QUERY_KEY],
    queryFn: () => fetchViewerFx(),
    refetchOnWindowFocus: false,
  });

  return () => (
    <Avatar
      image={viewer.value?.avatarUrl}
      shape="circle"
      label={viewer.value?.avatarUrl ? undefined : 'YOU'}
      size="large"
    />
  );
});
