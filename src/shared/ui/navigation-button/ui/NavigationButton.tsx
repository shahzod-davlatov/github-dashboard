import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

import { Button } from '@shadcn';

import type { SlotsType, VNode } from 'vue';
import type { RouterLinkProps } from 'vue-router';

type Props = { isCurrent: boolean } & RouterLinkProps;
type Slots = SlotsType<{ default: () => VNode[] }>;

export const NavigationButton = defineComponent<Props, {}, string, Slots>(
  (props, { slots }) => {
    return () => (
      <Button
        class={[
          'p-0 text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:no-underline',
          { 'text-foreground': props.isCurrent },
        ]}
        variant="link"
        as-child
      >
        <RouterLink {...props}>{slots.default()}</RouterLink>
      </Button>
    );
  },
  {
    props: [
      'isCurrent',
      'to',
      'replace',
      'activeClass',
      'ariaCurrentValue',
      'custom',
      'exactActiveClass',
    ],
  }
);
