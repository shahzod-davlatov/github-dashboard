import { defineComponent } from 'vue';

import Message from 'primevue/message';

import type { SlotsType, VNode } from 'vue';

type Props = { icon: string };
type Emits = {
  click: (event: MouseEvent) => void;
};
type Slots = SlotsType<{ default: () => VNode[] }>;

export const DashboardInfo = defineComponent<Props, Emits, string, Slots>(
  (props, { attrs, emit, slots }) => {
    const handleClick = (event: MouseEvent) => {
      event.stopPropagation();
      emit('click', event);
    };

    return () => (
      <div class={{ 'cursor-pointer': attrs.onClick }} onClick={handleClick}>
        <Message closable={false} severity={attrs.onClick ? 'info' : 'warn'}>
          {{
            default: () => slots.default(),
            messageicon: () => <div class={[props.icon, 'mr-2 text-xl']}></div>,
          }}
        </Message>
      </div>
    );
  },
  { props: ['icon'] }
);
