import { defineComponent } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import { Toaster } from 'vue-sonner';

import { Layout } from '@widgets/layout';

import { APP_ROUTES } from '@constants/routes';

export const App = defineComponent(() => {
  const route = useRoute();

  return () => (
    <>
      {route.name !== APP_ROUTES.AUTH ? (
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
