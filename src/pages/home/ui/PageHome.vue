<script setup lang="ts">
import { Effector } from '@features/effector';

import { ref } from 'vue';

import { Button } from '@shadcn';

const open = ref(true);
</script>

<template>
  <div
    class="flex h-screen w-screen flex-col items-center justify-center gap-4 text-violet-700"
  >
    <Button @click="open = !open">{{ open ? 'Close' : 'Open' }}</Button>
    <Effector v-if="open" />
  </div>
</template>
