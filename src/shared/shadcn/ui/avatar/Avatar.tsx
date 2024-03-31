import { defineComponent } from 'vue';

import { cva } from 'class-variance-authority';
import { AvatarRoot } from 'radix-vue';

import { cn } from '../../lib';

import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes, SlotsType, VNode } from 'vue';

const avatarVariant = cva(
  'inline-flex shrink-0 select-none items-center justify-center overflow-hidden bg-secondary font-normal text-foreground',
  {
    variants: {
      size: {
        sm: 'size-10 text-xs',
        base: 'size-16 text-2xl',
        lg: 'size-32 text-5xl',
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-md',
      },
    },
  }
);

type AvatarVariants = VariantProps<typeof avatarVariant>;

type Props = {
  class?: HTMLAttributes['class'];
  size?: AvatarVariants['size'];
  shape?: AvatarVariants['shape'];
};

type Slots = SlotsType<{ default: () => VNode[] }>;

export const Avatar = defineComponent<Props, {}, string, Slots>(
  (props, { slots }) => {
    return () => (
      <AvatarRoot
        class={[
          cn(
            avatarVariant({
              size: props.size ?? 'sm',
              shape: props.shape ?? 'circle',
            })
          ),
          props.class,
        ]}
      >
        {slots.default()}
      </AvatarRoot>
    );
  },
  { props: ['class', 'shape', 'size'] }
);
