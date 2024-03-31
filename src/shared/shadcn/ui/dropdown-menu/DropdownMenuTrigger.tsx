import { defineComponent } from 'vue';

import { DropdownMenuTrigger as Trigger, useForwardProps } from 'radix-vue';

import type { DropdownMenuTriggerProps } from 'radix-vue';
import type { SlotsType, VNode } from 'vue';

type Slots = SlotsType<{ default: () => VNode[] }>;

export const DropdownMenuTrigger = defineComponent<
  DropdownMenuTriggerProps,
  {},
  string,
  Slots
>(
  (props, { slots }) => {
    const forwardedProps = useForwardProps(props);

    return () => (
      <Trigger class="outline-none" {...forwardedProps.value}>
        {slots.default()}
      </Trigger>
    );
  },
  { props: ['as', 'asChild', 'disabled'] }
);
