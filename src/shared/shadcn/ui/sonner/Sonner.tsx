import { defineComponent } from 'vue';
import { Toaster } from 'vue-sonner';

import type { ToasterProps } from 'vue-sonner';

export const Sonner = defineComponent<ToasterProps>(
  (props) => {
    return () => (
      <Toaster
        class="toaster group"
        {...props}
        toastOptions={{
          classes: {
            toast:
              'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
            description: 'group-[.toast]:text-muted-foreground',
            actionButton:
              'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
            cancelButton:
              'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
          },
        }}
      />
    );
  },
  {
    props: [
      'class',
      'closeButton',
      'cn',
      'containerAriaLabel',
      'dir',
      'duration',
      'expand',
      'gap',
      'hotkey',
      'icons',
      'invert',
      'offset',
      'pauseWhenPageIsHidden',
      'position',
      'richColors',
      'style',
      'theme',
      'toastOptions',
      'visibleToasts',
    ],
  }
);
