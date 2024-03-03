<script setup lang="ts">
// import { Effector } from '@features/effector';

import { ref } from 'vue';

import { Button } from '@shadcn';

const open = ref(true);
</script>

<template>
  <div
    class="flex h-screen w-screen flex-col items-center justify-center text-violet-700"
  >
    <Button @click="open = !open" />
    <!-- <Effector v-if="open" /> -->
  </div>
</template>
