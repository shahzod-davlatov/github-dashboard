import { Suspense, defineAsyncComponent, defineComponent } from 'vue';

import Skeleton from 'primevue/skeleton';

import { useQuery } from '@tanstack/vue-query';

import { useStore } from 'effector-vue/composition';

import { $userLogin } from '@entities/user';
import { fetchUserOverviewFx } from '@entities/user-overview';

import { USER_OVERVIEW_QUERY_KEY } from '@constants/queryKeys';

const AsyncContributionsChart = defineAsyncComponent(() =>
  import('@features/contributions-chart').then(
    (module) => module.ContributionsChart
  )
);
const AsyncUserDashboardMessages = defineAsyncComponent(() =>
  import('@features/user-dashboard-messages').then(
    (module) => module.UserDashboardMessages
  )
);
const AsyncUserDashboardInfo = defineAsyncComponent(() =>
  import('@features/user-dashboard-info').then(
    (module) => module.UserDashboardInfo
  )
);

export const DashboardOverview = defineComponent(() => {
  const userLogin = useStore($userLogin);

  const { isLoading } = useQuery({
    queryKey: [USER_OVERVIEW_QUERY_KEY, userLogin],
    queryFn: () => fetchUserOverviewFx(userLogin.value!),
    enabled: () => Boolean(userLogin.value),
    refetchOnWindowFocus: false,
  });

  return () => (
    <>
      <Suspense>
        {{
          default: () => (
            <AsyncUserDashboardMessages isLoading={isLoading.value} />
          ),
          fallback: () => (
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {Array(12)
                .fill(Number)
                .map((_, index) => (
                  <Skeleton key={index} height="3rem" />
                ))}
            </div>
          ),
        }}
      </Suspense>
      <div class="grid h-96 gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Suspense>
          {{
            default: () => (
              <AsyncContributionsChart isLoading={isLoading.value} />
            ),
            fallback: () => <Skeleton class="col-span-4" height="100%" />,
          }}
        </Suspense>
        <Suspense>
          {{
            default: () => (
              <AsyncUserDashboardInfo isLoading={isLoading.value} />
            ),
            fallback: () => <Skeleton class="col-span-3" height="100%" />,
          }}
        </Suspense>
      </div>
    </>
  );
});
