import { Layout } from '@pages/layout';

import { AppRoutes } from '@constants/routes';

import { defineComponent } from 'vue';
import { RouterView, useRoute } from 'vue-router';

export const App = defineComponent(() => {
  const route = useRoute();

  return () =>
    route.name !== AppRoutes.Auth ? (
      <Layout>
        <RouterView />
      </Layout>
    ) : (
      <RouterView />
    );
});
