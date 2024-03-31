import { defineComponent } from 'vue';

import { cn } from '../../lib';

import type { HTMLAttributes, SlotsType, VNode } from 'vue';

type Props = {
  class?: HTMLAttributes['class'];
};

type Slots = SlotsType<{ default: () => VNode[] }>;

export const CardFooter = defineComponent<Props, {}, string, Slots>(
  (props, { slots }) => {
    return () => (
      <div class={cn('flex items-center p-6 pt-0', props.class)}>
        {slots.default()}
      </div>
    );
  },
  { props: ['class'] }
);
