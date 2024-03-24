import { Effector } from '@features/effector';

import { defineComponent, ref } from 'vue';

import { Button } from '@shadcn';

export const Home = defineComponent(() => {
  const open = ref(true);

  const handleClick = () => {
    open.value = !open.value;
  };

  return () => (
    <div class="flex size-full flex-col items-center justify-center gap-4">
      <Button onClick={handleClick}>{open.value ? 'Close' : 'Open'}</Button>
      {open.value && <Effector />}
    </div>
  );
});
