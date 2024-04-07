import { computed } from 'vue';

import { useStore } from 'effector-vue/composition';

import { $userOverview } from '@entities/user-overview';

import type { UserOverview } from '@entities/user-overview';

const userInfoKeys: (keyof Pick<
  Exclude<UserOverview, null>,
  'name' | 'login' | 'bio' | 'location' | 'company'
>)[] = ['name', 'login', 'bio', 'location', 'company'];

const userInfoIconMap: Record<(typeof userInfoKeys)[number], string> = {
  name: 'icon-contact',
  login: 'icon-cylinder',
  bio: 'icon-book-user',
  location: 'icon-map-pin',
  company: 'icon-building',
};

export const useUserInfo = () => {
  const userOverview = useStore($userOverview);

  const userInfo = computed(() =>
    userInfoKeys
      .filter((key) => userOverview.value?.[key])
      .map((key) => ({
        key: key,
        icon: userInfoIconMap[key],
        text: userOverview.value![key],
      }))
  );

  return { userInfo };
};
