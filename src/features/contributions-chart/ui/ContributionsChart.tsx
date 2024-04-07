import { defineComponent } from 'vue';

import { useDark } from '@vueuse/core';

import Card from 'primevue/card';
import Skeleton from 'primevue/skeleton';

import { useStore } from 'effector-vue/composition';

import { VisAxis, VisStackedBar, VisXYContainer } from '@unovis/vue';

import { $userOverview } from '@entities/user-overview';

import { useContributionsData } from '../lib';

type Props = {
  isLoading: boolean;
};

export const ContributionsChart = defineComponent<Props>(
  (props) => {
    const userOverview = useStore($userOverview);

    const isDark = useDark();

    const { contributionsData } = useContributionsData();

    return () =>
      !userOverview.value || props.isLoading ? (
        <Skeleton class="col-span-4" height="100%" />
      ) : (
        <Card class="col-span-4">
          {{
            title: () => 'Contributions',
            content: () => (
              <VisXYContainer height="16rem" data={contributionsData.value}>
                <VisStackedBar
                  x={(_: unknown, index: number) => index}
                  y={(data: (typeof contributionsData.value)[number]) =>
                    data.total
                  }
                  color={isDark.value ? '#a78bfa' : '#8b5cf6'}
                  roundedCorners={4}
                  barPadding={0.15}
                />
                <VisAxis
                  type="x"
                  numTicks={contributionsData.value.length}
                  tickFormat={(index: number) =>
                    contributionsData.value[index]?.name
                  }
                  gridLine={false}
                  tickLine={false}
                />
                <VisAxis
                  type="y"
                  numTicks={contributionsData.value.length}
                  gridLine={false}
                  tickLine={false}
                  domainLine={false}
                />
              </VisXYContainer>
            ),
          }}
        </Card>
      );
  },
  { props: ['isLoading'] }
);
