import { defineComponent } from 'vue';

import { useQuery } from '@tanstack/vue-query';

import { useGate, useStore } from 'effector-vue/composition';

import { Avatar, AvatarImage, AvatarFallback } from '@shadcn/avatar';
import { Button } from '@shadcn/button';
import { DropdownMenu, DropdownMenuTrigger } from '@shadcn/dropdown-menu';

import { $user, UserGate, fetchUserFx } from '../model';

export const UserLogo = defineComponent(() => {
  const user = useStore($user);

  useGate(UserGate, () => ({ id: 'User' }));

  useQuery({
    queryKey: ['user'],
    queryFn: () => fetchUserFx(),
  });

  return () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" class="relative size-8 rounded-full">
          <Avatar class="size-8">
            <AvatarImage src={user.value?.avatarUrl} />
            <AvatarFallback>YOU</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
});
