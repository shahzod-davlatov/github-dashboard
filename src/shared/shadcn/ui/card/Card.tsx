import { defineComponent } from 'vue';

import { cn } from '../../lib';

import type { HTMLAttributes, SlotsType, VNode } from 'vue';

type Props = {
  class?: HTMLAttributes['class'];
};

type Slots = SlotsType<{ default: () => VNode[] }>;

export const Card = defineComponent<Props, {}, string, Slots>(
  (props, { slots }) => {
    return () => (
      <div
        class={cn(
          'rounded-xl border bg-card text-card-foreground shadow',
          props.class
        )}
      >
        {slots.default()}
      </div>
    );
  },
  { props: ['class'] }
);
