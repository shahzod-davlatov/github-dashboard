import { cn } from '../../lib';

import { defineComponent } from 'vue';

import type { HTMLAttributes, SlotsType, VNode } from 'vue';

type Props = {
  class?: HTMLAttributes['class'];
};

type Slots = SlotsType<{ default: () => VNode[] }>;

export const CardTitle = defineComponent<Props, {}, string, Slots>(
  (props, { slots }) => {
    return () => (
      <h3 class={cn('font-semibold leading-none tracking-tight', props.class)}>
        {slots.default()}
      </h3>
    );
  },
  { props: ['class'] }
);
