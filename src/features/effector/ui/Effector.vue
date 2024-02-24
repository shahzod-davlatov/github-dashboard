<script setup lang="ts">
import { $counter, increment, decrement } from '../model'

import { Button } from '@shadcn'
import { useStore } from 'effector-vue/composition'

const counter = useStore($counter)
</script>

<template>
  <div class="flex flex-col items-center">
    <p>{{ counter }}</p>
    <div class="flex gap-2">
      <Button @click="increment">Increment</Button>
      <Button @click="decrement">Decrement</Button>
    </div>
  </div>
</template>
