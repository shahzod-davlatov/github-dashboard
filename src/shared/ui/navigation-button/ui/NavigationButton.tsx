import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

import Button from 'primevue/button';

import type { SlotsType, VNode } from 'vue';
import type { RouterLinkProps } from 'vue-router';

type Props = { isCurrent: boolean } & RouterLinkProps;
type Slots = SlotsType<{ default: () => VNode[] }>;

export const NavigationButton = defineComponent<Props, {}, string, Slots>(
  (props, { slots }) => {
    return () => (
      <Button severity={props.isCurrent ? undefined : 'secondary'} text>
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
