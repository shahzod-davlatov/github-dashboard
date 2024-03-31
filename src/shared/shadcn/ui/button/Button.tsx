import { cn } from '../../lib';

import { defineComponent } from 'vue';

import { cva } from 'class-variance-authority';
import { Primitive } from 'radix-vue';

import type { VariantProps } from 'class-variance-authority';
import type { PrimitiveProps } from 'radix-vue';
import type {
  HTMLAttributes,
  SlotsType,
  VNode,
  ButtonHTMLAttributes,
} from 'vue';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

type Props = PrimitiveProps & {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  as?: string;
  class?: HTMLAttributes['class'];
  disabled?: ButtonHTMLAttributes['disabled'];
};

type Emits = {
  click?: ButtonHTMLAttributes['onClick'];
};

type Slots = SlotsType<{ default: () => VNode[] }>;

export const Button = defineComponent<Props, Emits, 'click', Slots>(
  (props, { slots }) => {
    return () => (
      <Primitive
        as={props.as ?? 'button'}
        as-child={props.asChild}
        class={cn(
          buttonVariants({ variant: props.variant, size: props.size }),
          props.class
        )}
      >
        {slots.default()}
      </Primitive>
    );
  },
  {
    props: ['variant', 'size', 'as', 'asChild', 'class', 'disabled'],
  }
);
