import { defineComponent } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import { Toaster } from 'vue-sonner';

import { Layout } from '@pages/layout';

import { AppRoutes } from '@constants/routes';

export const App = defineComponent(() => {
  const route = useRoute();

  return () => (
    <>
      {route.name !== AppRoutes.Auth ? (
        <Layout>
          <RouterView />
        </Layout>
      ) : (
        <RouterView />
      )}
      <Toaster />
    </>
  );
});
