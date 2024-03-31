import { defineComponent } from 'vue';

import { AvatarImage as Image } from 'radix-vue';

import type { AvatarImageProps } from 'radix-vue';

export const AvatarImage = defineComponent<AvatarImageProps>(
  (props) => {
    return () => <Image {...props} class="size-full object-cover" />;
  },
  { props: ['as', 'asChild', 'src'] }
);
