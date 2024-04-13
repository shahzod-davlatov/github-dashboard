import { defineComponent } from 'vue';

import { useStore } from 'effector-vue/composition';

import { SavedUserCard } from '@features/saved-user-card';

import { $savedUsers } from '@entities/saved-user';

export const SavedUsers = defineComponent(() => {
  const savedUsers = useStore($savedUsers);

  return () => (
    <div class="flex flex-col gap-4 overflow-auto">
      {savedUsers.value.map((savedUser) => (
        <SavedUserCard
          avatar={savedUser!.avatarUrl}
          key={savedUser!.id}
          login={savedUser!.login}
          name={savedUser!.name}
        />
      ))}
    </div>
  );
});
