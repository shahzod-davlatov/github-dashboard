import type { InlineMessageProps } from 'primevue/inlinemessage';

export const inlinemessage = {
  root: ({ props }: { props: InlineMessageProps }) => ({
    class: [
      'inline-flex items-center justify-center align-top gap-2',
      'm-0',
      {
        'text-primary-500 dark:text-primary-400': props.severity == 'info',
        'text-green-500 dark:text-green-300': props.severity == 'success',
        'text-orange-500 dark:text-orange-300': props.severity == 'warn',
        'text-red-500 dark:text-red-300': props.severity == 'error',
      },
    ],
  }),
  icon: {
    class: ['size-8', 'shrink-0'],
  },
  text: {
    class: ['text-4xl leading-none', 'font-medium'],
  },
};
