import { cn } from '../../lib';

import { defineComponent } from 'vue';

import type { HTMLAttributes, SlotsType, VNode } from 'vue';

type Props = {
  class?: HTMLAttributes['class'];
};

type Slots = SlotsType<{ default: () => VNode[] }>;

export const CardDescription = defineComponent<Props, {}, string, Slots>(
  (props, { slots }) => {
    return () => (
      <p class={cn('text-sm text-muted-foreground', props.class)}>
        {slots.default()}
      </p>
    );
  },
  { props: ['class'] }
);
