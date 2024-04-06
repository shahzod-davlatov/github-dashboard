import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

import { NavigationButton } from '@ui/navigation-button';

import { APP_ROUTES } from '@constants/routes';

export const HeaderNavigation = defineComponent(() => {
  const route = useRoute();

  const navigationMap = computed(() => [
    {
      id: 'overview',
      isCurrent: route.name === APP_ROUTES.HOME,
      to: { name: APP_ROUTES.HOME },
      title: 'Overview',
    },
    {
      id: 'repositories',
      isCurrent: route.name === APP_ROUTES.REPOSITORIES,
      to: { name: APP_ROUTES.REPOSITORIES },
      title: 'Repositories',
    },
    {
      id: 'stars',
      isCurrent: route.name === APP_ROUTES.STARS,
      to: { name: APP_ROUTES.STARS },
      title: 'Stars',
    },
  ]);

  return () => (
    <nav class="flex gap-4">
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
