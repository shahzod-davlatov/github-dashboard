import { defineComponent } from 'vue';

import { DropdownMenuRoot, useForwardPropsEmits } from 'radix-vue';

import type { DropdownMenuRootProps } from 'radix-vue';
import type { SlotsType, VNode } from 'vue';

type Emits = {
  'update:open': (payload: boolean) => void;
};

type Slots = SlotsType<{ default: () => VNode[] }>;

export const DropdownMenu = defineComponent<
  DropdownMenuRootProps,
  Emits,
  string,
  Slots
>(
  (props, { emit, slots }) => {
    const forwarded = useForwardPropsEmits(props, emit);

    return () => (
      <DropdownMenuRoot {...forwarded.value}>
        {slots.default()}
      </DropdownMenuRoot>
    );
  },
  { props: ['defaultOpen', 'dir', 'modal', 'open'] }
);
