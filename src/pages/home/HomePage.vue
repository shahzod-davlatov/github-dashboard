<script setup lang="ts">
import { Effector } from '@features/effector';

import { ref } from 'vue';

import { Button } from '@shadcn';

const open = ref(true);
</script>

<template>
  <div
    class="h-screen w-screen flex flex-col justify-center items-center text-violet-700"
  >
    <Button @click="open = !open" />
    <Effector v-if="open" />
  </div>
</template>
