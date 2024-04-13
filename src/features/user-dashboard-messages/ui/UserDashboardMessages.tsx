import { defineComponent } from 'vue';

import Skeleton from 'primevue/skeleton';

import { useStore } from 'effector-vue/composition';

import { $userOverview } from '@entities/user-overview';

import { DashboardInfo } from '@ui/dashboard-info';

import { visibleDashboardCards } from '@localStorages/dashboard';

import { useDashboardInfo } from '../lib';

type Props = {
  isLoading: boolean;
};

type Emits = {
  click: (key: string) => void;
};

export const UserDashboardMessages = defineComponent<Props, Emits>(
  (props, { emit }) => {
    const userOverview = useStore($userOverview);

    const { dashboardInfo } = useDashboardInfo();

    const handleClick = (key: string) => (event: MouseEvent) => {
      event.stopPropagation();
      emit('click', key);
    };

    return () => (
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {dashboardInfo.value
          .filter(({ key }) => visibleDashboardCards.value.has(key))
          .map((info) =>
            !userOverview.value || props.isLoading ? (
              <Skeleton height="3rem" key={info.key} />
            ) : (
              <DashboardInfo
                icon={info.icon}
                key={info.key}
                onClick={handleClick(info.key)}
              >
                {info.text}
              </DashboardInfo>
            )
          )}
      </div>
    );
  },
  { props: ['isLoading'] }
);
