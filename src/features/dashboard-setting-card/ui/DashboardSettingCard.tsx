import { defineComponent } from 'vue';

import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Panel from 'primevue/panel';

import { visibleDashboardCards } from '@localStorages/dashboard';

import type { DASHBOARD_KEYS } from '@constants/dashboardKeys';

type Props = {
  dashboardKey: (typeof DASHBOARD_KEYS)[number];
  icon: string;
};

export const DashboardSettingCard = defineComponent<Props>(
  (props) => {
    const handleChangeVisible = () => {
      if (visibleDashboardCards.value.has(props.dashboardKey)) {
        visibleDashboardCards.value.delete(props.dashboardKey);
      } else {
        visibleDashboardCards.value.add(props.dashboardKey);
      }
    };

    return () => (
      <Panel>
        {{
          header: () => (
            <div class="flex items-center gap-2">
              <Avatar icon={props.icon} shape="circle" size="large" />
              <span class="font-bold">{props.dashboardKey}</span>
            </div>
          ),
          icons: () => (
            <Button
              icon={
                visibleDashboardCards.value.has(props.dashboardKey)
                  ? 'icon-eye'
                  : 'icon-eye-off'
              }
              onClick={handleChangeVisible}
              severity={
                visibleDashboardCards.value.has(props.dashboardKey)
                  ? 'success'
                  : 'warning'
              }
            />
          ),
        }}
      </Panel>
    );
  },
  { props: ['icon', 'dashboardKey'] }
);
