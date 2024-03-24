import {
  $viewer,
  $size,
  fetchViewerFx,
  increment,
  decrement,
  EffectorGate,
} from '../model';

import { defineComponent } from 'vue';

import { useQuery } from '@tanstack/vue-query';

import { useStore, useUnit, useGate } from 'effector-vue/composition';

import { Loader2 } from 'lucide-vue-next';

import { Button, Card, CardHeader, CardTitle, CardContent } from '@shadcn';

export const Effector = defineComponent(() => {
  const viewer = useStore($viewer);
  const size = useStore($size);

  useGate(EffectorGate, () => ({ id: 'Effector' }));

  const { isLoading } = useQuery({
    queryKey: ['effector', size],
    queryFn: () => fetchViewerFx(size.value),
  });

  const onIncrement = useUnit(increment);
  const onDecrement = useUnit(decrement);

  return () => (
    <>
      <div class="flex flex-col items-center gap-2">
        {size.value}
        <div class="flex gap-2">
          <Button onClick={onIncrement}>Increment</Button>
          <Button onClick={onDecrement}>Decrement</Button>
        </div>
      </div>
      <div class="mt-3 flex max-h-96 flex-wrap justify-center overflow-y-scroll">
        {isLoading.value ? (
          <Loader2 class="size-10 animate-spin" />
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>{viewer.value?.name}</CardTitle>
            </CardHeader>
            <CardContent>{viewer.value?.login}</CardContent>
          </Card>
        )}
      </div>
    </>
  );
});
