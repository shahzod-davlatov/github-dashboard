<script setup lang="ts">
import {
  $films,
  $limit,
  fetchFilmsFx,
  increment,
  decrement,
  PostsGate,
} from '../model';

import { useQuery } from '@tanstack/vue-query';

import { useStore, useUnit, useGate } from 'effector-vue/composition';

import { Loader2 } from 'lucide-vue-next';

import { Button, Card, CardHeader, CardTitle, CardContent } from '@shadcn';

const films = useStore($films);
const limit = useStore($limit);

useGate(PostsGate, () => ({ id: 'Effector' }));

const { isLoading } = useQuery({
  queryKey: ['effector', limit],
  queryFn: () => fetchFilmsFx(),
});

const onIncrement = useUnit(increment);
const onDecrement = useUnit(decrement);
</script>

<template>
  <div class="flex flex-col items-center">
    <p>{{ limit }}</p>
    <div class="flex gap-2">
      <Button @click="onIncrement">Increment</Button>
      <Button @click="onDecrement">Decrement</Button>
    </div>
  </div>
  <div class="flex flex-wrap justify-center mt-3 max-h-96 overflow-y-scroll">
    <Loader2 v-if="isLoading" class="animate-spin h-10 w-10" />
    <Card v-for="film in films" v-else :key="film.id">
      <CardHeader>
        <CardTitle>{{ film.name }}</CardTitle>
      </CardHeader>
      <CardContent>{{ film.description }}</CardContent>
    </Card>
  </div>
</template>
