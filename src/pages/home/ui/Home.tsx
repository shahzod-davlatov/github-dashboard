import { defineComponent } from 'vue';

import Button from 'primevue/button';

export const Home = defineComponent(() => {
  return () => (
    <div class="flex size-full flex-col items-center justify-center gap-4">
      <Button label="Submit" />
    </div>
  );
});
