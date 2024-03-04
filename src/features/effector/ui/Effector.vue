<script setup lang="ts">
import {
  $viewer,
  $size,
  fetchViewerFx,
  increment,
  decrement,
  EffectorGate,
} from '../model';

import { useQuery } from '@tanstack/vue-query';

import { useStore, useUnit, useGate } from 'effector-vue/composition';

import { Loader2 } from 'lucide-vue-next';

import { Button, Card, CardHeader, CardTitle, CardContent } from '@shadcn';

const viewer = useStore($viewer);
const size = useStore($size);

useGate(EffectorGate, () => ({ id: 'Effector' }));

const { isLoading } = useQuery({
  queryKey: ['effector', size],
  queryFn: () => fetchViewerFx(size.value),
});

const onIncrement = useUnit(increment);
const onDecrement = useUnit(decrement);
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="flex gap-2">
      <Button @click="onIncrement">Increment</Button>
      <Button @click="onDecrement">Decrement</Button>
    </div>
  </div>
  <div class="mt-3 flex max-h-96 flex-wrap justify-center overflow-y-scroll">
    <Loader2 v-if="isLoading" class="size-10 animate-spin" />
    <Card v-else>
      <CardHeader>
        <CardTitle>{{ viewer?.name }}</CardTitle>
      </CardHeader>
      <CardContent>{{ viewer?.login }}</CardContent>
    </Card>
  </div>
</template>
