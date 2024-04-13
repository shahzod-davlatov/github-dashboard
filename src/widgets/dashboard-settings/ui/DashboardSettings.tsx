import { defineComponent } from 'vue';

import { DashboardSettingCard } from '@features/dashboard-setting-card';

import { dashboardInfoMap } from '@lib/dashboardInfo';

export const DashboardSettings = defineComponent(() => {
  return () => (
    <div class="grid gap-4 overflow-auto md:grid-cols-4">
      {dashboardInfoMap.map(({ key, icon }) => (
        <DashboardSettingCard dashboardKey={key} icon={icon} key={key} />
      ))}
    </div>
  );
});
