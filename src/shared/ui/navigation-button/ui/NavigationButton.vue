<script setup lang="ts">
import { Button } from '@shadcn';

import type { RouterLinkProps } from 'vue-router';

const props = defineProps<
  {
    isCurrent: boolean;
  } & RouterLinkProps
>();
</script>

<template>
  <Button
    :class="[
      'p-0 text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:no-underline',
      { 'text-foreground': isCurrent },
    ]"
    variant="link"
    as-child
  >
    <RouterLink v-bind="props"><slot /></RouterLink>
  </Button>
</template>
