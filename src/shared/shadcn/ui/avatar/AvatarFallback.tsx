import { defineComponent } from 'vue';

import { AvatarFallback as Fallback } from 'radix-vue';

import type { AvatarFallbackProps } from 'radix-vue';
import type { SlotsType, VNode } from 'vue';

type Slots = SlotsType<{ default: () => VNode[] }>;

export const AvatarFallback = defineComponent<
  AvatarFallbackProps,
  {},
  string,
  Slots
>(
  (props, { slots }) => {
    return () => <Fallback {...props}>{slots.default()}</Fallback>;
  },
  { props: ['as', 'asChild', 'delayMs'] }
);
