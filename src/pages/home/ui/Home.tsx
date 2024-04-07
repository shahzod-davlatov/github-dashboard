import { Suspense, defineAsyncComponent, defineComponent } from 'vue';

import InlineMessage from 'primevue/inlinemessage';

const AsyncDashboardOverview = defineAsyncComponent(() =>
  import('@widgets/dashboard-overview').then(
    (module) => module.DashboardOverview
  )
);

export const Home = defineComponent(() => {
  return () => (
    <div class="mx-auto size-full max-w-screen-2xl pt-6">
      <InlineMessage severity="info">
        {{
          default: () => 'Dashboard',
          icon: () => (
            <svg
              class="size-9"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="7" height="9" x="3" y="3" rx="1" />
              <rect width="7" height="5" x="14" y="3" rx="1" />
              <rect width="7" height="9" x="14" y="12" rx="1" />
              <rect width="7" height="5" x="3" y="16" rx="1" />
            </svg>
          ),
        }}
      </InlineMessage>
      <div class="mt-4 flex size-full flex-col gap-4">
        <Suspense>
          <AsyncDashboardOverview />
        </Suspense>
      </div>
    </div>
  );
});
