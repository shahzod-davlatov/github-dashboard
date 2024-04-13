import { Suspense, defineAsyncComponent, defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import Button from 'primevue/button';
import Card from 'primevue/card';
import Skeleton from 'primevue/skeleton';

import { APP_ROUTES } from '@constants/routes';

const SavedUsers = defineAsyncComponent(() =>
  import('@widgets/saved-users').then((module) => module.SavedUsers)
);
const DashboardSettings = defineAsyncComponent(() =>
  import('@widgets/dashboard-settings').then(
    (module) => module.DashboardSettings
  )
);

export const Settings = defineComponent(() => {
  const router = useRouter();

  const handleBack = () => {
    void router.push({ name: APP_ROUTES.HOME });
  };

  const handleLogOut = () => {
    void router.push({ name: APP_ROUTES.HOME });
  };

  return () => (
    <div class="mx-auto flex size-full max-w-screen-2xl flex-col gap-4 pt-6">
      <Button
        class="w-fit"
        icon="icon-arrow-left"
        label="Back"
        onClick={handleBack}
        size="large"
      />
      <div class="grid grow grid-cols-4 gap-4">
        <Suspense>
          {{
            default: () => (
              <Card>
                {{
                  content: () => <SavedUsers />,
                  title: () => 'Saved Users',
                }}
              </Card>
            ),
            fallback: () => <Skeleton height="100%" />,
          }}
        </Suspense>
        <Suspense>
          {{
            default: () => (
              <Card class="col-span-3">
                {{
                  content: () => <DashboardSettings />,
                  title: () => 'Dashboard settings',
                }}
              </Card>
            ),
            fallback: () => <Skeleton class="col-span-3" height="100%" />,
          }}
        </Suspense>
      </div>
      <Button
        class="w-fit self-end"
        label="Log out"
        onClick={handleLogOut}
        severity="danger"
        size="large"
      />
    </div>
  );
});
