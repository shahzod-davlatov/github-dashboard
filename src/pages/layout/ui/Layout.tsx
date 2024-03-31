import { defineComponent } from 'vue';

import { HeaderNavigation } from '@features/header-navigation';

import { UserLogo } from '@entities/user';

import { GithubButton } from '@ui/github-button';
import { ThemeButton } from '@ui/theme-button';

import type { SlotsType, VNode } from 'vue';

type Slots = SlotsType<{ default: () => VNode[] }>;

export const Layout = defineComponent<{}, {}, string, Slots>((_, { slots }) => {
  return () => (
    <>
      <header class="flex max-h-16 min-h-16 items-center gap-6 border-b px-4">
        <HeaderNavigation />
        <div class="ml-auto flex items-center gap-2">
          <GithubButton />
          <ThemeButton />
          <UserLogo />
        </div>
      </header>
      <main class="grow">{slots.default()}</main>
    </>
  );
});
