import type { MessageProps } from 'primevue/message';

export const message = {
  root: ({ props }: { props: MessageProps }) => ({
    class: [
      // Spacing and Shape
      'm-0',
      'rounded-md',
      'ring-1 ring-inset ring-surface-200 dark:ring-surface-700 ring-offset-0',
      // Colors
      'bg-surface-0 dark:bg-surface-900',
      {
        'text-primary-500 dark:text-primary-400': props.severity == 'info',
        'text-green-500 dark:text-green-300': props.severity == 'success',
        'text-surface-500 dark:text-surface-400': props.severity == 'warn',
        'text-red-500 dark:text-red-300': props.severity == 'error',
      },
    ],
  }),
  wrapper: {
    class: ['flex items-center', 'px-4 py-2.5'],
  },
  icon: {
    class: ['w-5 h-5', 'mr-3 shrink-0'],
  },
  text: {
    class: ['text-sm leading-none', 'font-medium'],
  },
  button: () => ({
    class: [
      // Flexbox
      'flex items-center justify-center',
      // Size
      'w-6 h-6',
      // Spacing and Misc
      'ml-auto relative',
      // Shape
      'rounded-full',
      // Colors
      'bg-transparent',
      'text-surface-700 dark:text-surface-0/80',
      // Transitions
      'transition duration-200 ease-in-out',
      // States
      'hover:bg-surface-100 dark:hover:bg-surface-700',
      'outline-none focus:ring-1 focus:ring-inset',
      'focus:ring-primary-500 dark:focus:ring-primary-400',
      // Misc
      'overflow-hidden',
    ],
  }),
  closeicon: {
    class: ['w-3 h-3', 'shrink-0'],
  },
  transition: {
    enterFromClass: 'opacity-0',
    enterActiveClass: 'transition-opacity duration-300',
    leaveFromClass: 'max-h-40',
    leaveActiveClass: 'overflow-hidden transition-all duration-300 ease-in',
    leaveToClass: 'max-h-0 opacity-0 !m-0',
  },
};
