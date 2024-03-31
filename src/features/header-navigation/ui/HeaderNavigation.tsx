import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

import { NavigationButton } from '@ui/navigation-button';

import { AppRoutes } from '@constants/routes';

export const HeaderNavigation = defineComponent(() => {
  const route = useRoute();

  const navigationMap = computed(() => [
    {
      id: 'overview',
      isCurrent: route.name === AppRoutes.Home,
      to: { name: AppRoutes.Home },
      title: 'Overview',
    },
    {
      id: 'repositories',
      isCurrent: route.name === AppRoutes.Repositories,
      to: { name: AppRoutes.Repositories },
      title: 'Repositories',
    },
    {
      id: 'stars',
      isCurrent: route.name === AppRoutes.Stars,
      to: { name: AppRoutes.Stars },
      title: 'Stars',
    },
  ]);

  return () => (
    <nav class="flex gap-6">
      {navigationMap.value.map((navigation) => (
        <NavigationButton
          key={navigation.id}
          isCurrent={navigation.isCurrent}
          to={navigation.to}
        >
          {navigation.title}
        </NavigationButton>
      ))}
    </nav>
  );
});
