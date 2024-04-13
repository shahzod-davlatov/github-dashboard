import { defineComponent } from 'vue';

import { DashboardSettingCard } from '@features/dashboard-setting-card';

import { dashboardInfoMap } from '@lib/dashboardInfo';

export const DashboardSettings = defineComponent(() => {
  return () => (
    <div class="grid grid-cols-4 gap-4 overflow-auto">
      {dashboardInfoMap.map(({ key, icon }) => (
        <DashboardSettingCard dashboardKey={key} icon={icon} key={key} />
      ))}
    </div>
  );
});
