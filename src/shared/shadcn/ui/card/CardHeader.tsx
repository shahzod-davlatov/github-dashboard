import { defineComponent } from 'vue';

import { cn } from '../../lib';

import type { HTMLAttributes, SlotsType, VNode } from 'vue';

type Props = {
  class?: HTMLAttributes['class'];
};

type Slots = SlotsType<{ default: () => VNode[] }>;

export const CardHeader = defineComponent<Props, {}, string, Slots>(
  (props, { slots }) => {
    return () => (
      <div class={cn('flex flex-col gap-y-1.5 p-6', props.class)}>
        {slots.default()}
      </div>
    );
  },
  { props: ['class'] }
);
