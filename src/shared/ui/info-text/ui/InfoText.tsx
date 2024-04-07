import { defineComponent } from 'vue';

type Props = {
  icon: string;
  text: string;
};

export const InfoText = defineComponent<Props>(
  (props) => {
    return () => (
      <div class="flex items-center gap-x-2">
        <i class={[props.icon, 'text-2xl']} />
        <span class="text-xl">{props.text}</span>
      </div>
    );
  },
  { props: ['icon', 'text'] }
);
