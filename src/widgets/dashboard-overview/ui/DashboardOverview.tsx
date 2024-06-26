import { Suspense, defineAsyncComponent, defineComponent } from 'vue';

import Skeleton from 'primevue/skeleton';

import { useQuery } from '@tanstack/vue-query';

import { useStore } from 'effector-vue/composition';

import { selectInfo } from '@entities/selected-info';
import { $userLogin } from '@entities/user';
import { fetchUserOverviewFx } from '@entities/user-overview';

import { USER_OVERVIEW_QUERY_KEY } from '@constants/queryKeys';

import type { DASHBOARD_KEYS } from '@constants/dashboardKeys';

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

  const { isFetching } = useQuery({
    enabled: () => Boolean(userLogin.value),
    queryFn: () => fetchUserOverviewFx(userLogin.value!),
    queryKey: [USER_OVERVIEW_QUERY_KEY, userLogin],
    refetchOnWindowFocus: false,
  });

  const handleClick = (key: (typeof DASHBOARD_KEYS)[number]) => {
    selectInfo(key);
  };

  return () => (
    <>
      <Suspense>
        {{
          default: () => (
            <AsyncUserDashboardMessages
              isLoading={isFetching.value}
              onClick={handleClick}
            />
          ),
          fallback: () => (
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {Array(12)
                .fill(Number)
                .map((_, index) => (
                  <Skeleton height="3rem" key={index} />
                ))}
            </div>
          ),
        }}
      </Suspense>
      <div class="grid min-h-96 gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Suspense>
          {{
            default: () => (
              <AsyncContributionsChart
                class="lg:col-span-4"
                isLoading={isFetching.value}
              />
            ),
            fallback: () => <Skeleton class="lg:col-span-4" height="100%" />,
          }}
        </Suspense>
        <Suspense>
          {{
            default: () => (
              <AsyncUserDashboardInfo
                class="lg:col-span-3"
                isLoading={isFetching.value}
              />
            ),
            fallback: () => <Skeleton class="lg:col-span-3" height="100%" />,
          }}
        </Suspense>
      </div>
    </>
  );
});
