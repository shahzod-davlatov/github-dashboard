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
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect height="9" rx="1" width="7" x="3" y="3" />
              <rect height="5" rx="1" width="7" x="14" y="3" />
              <rect height="9" rx="1" width="7" x="14" y="12" />
              <rect height="5" rx="1" width="7" x="3" y="16" />
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
