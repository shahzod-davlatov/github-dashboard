import { Suspense, defineComponent, h } from 'vue';

import Sidebar from 'primevue/sidebar';

import { useStore } from 'effector-vue/composition';

import { $selectedInfo, selectInfo } from '@entities/selected-info';

import { getSidebarContent, getSidebarHeader } from '../lib';

export const SidebarInfo = defineComponent(() => {
  const selectedInfo = useStore($selectedInfo);

  const handleClose = () => {
    selectInfo(null);
  };

  return () =>
    h(
      Sidebar,
      {
        position: 'left',
        header: getSidebarHeader(selectedInfo.value),
        visible: Boolean(selectedInfo.value),
        'onUpdate:visible': handleClose,
      },
      {
        default: () => (
          <Suspense>{getSidebarContent(selectedInfo.value)}</Suspense>
        ),
      }
    );
});
