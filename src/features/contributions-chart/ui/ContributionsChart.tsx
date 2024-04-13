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
  (props, { attrs }) => {
    const userOverview = useStore($userOverview);

    const isDark = useDark();

    const { contributionsData } = useContributionsData();

    return () =>
      !userOverview.value || props.isLoading ? (
        <Skeleton {...attrs} height="100%" />
      ) : (
        <Card {...attrs}>
          {{
            content: () => (
              <VisXYContainer data={contributionsData.value} height="16rem">
                <VisStackedBar
                  barPadding={0.15}
                  color={isDark.value ? '#a78bfa' : '#8b5cf6'}
                  roundedCorners={4}
                  x={(_: unknown, index: number) => index}
                  y={(data: (typeof contributionsData.value)[number]) =>
                    data.total
                  }
                />
                <VisAxis
                  gridLine={false}
                  numTicks={contributionsData.value.length}
                  tickFormat={(index: number) =>
                    contributionsData.value[index]?.name
                  }
                  tickLine={false}
                  type="x"
                />
                <VisAxis
                  domainLine={false}
                  gridLine={false}
                  numTicks={contributionsData.value.length}
                  tickLine={false}
                  type="y"
                />
              </VisXYContainer>
            ),
            title: () => 'Contributions',
          }}
        </Card>
      );
  },
  { props: ['isLoading'] }
);
