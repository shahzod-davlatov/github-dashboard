import { HeaderNavigation } from '@features/header-navigation';

import { GithubButton } from '@entities/github-button';
import { ThemeButton } from '@entities/theme-button';

import { defineComponent } from 'vue';

import type { SlotsType, VNode } from 'vue';

type Slots = SlotsType<{ default: () => VNode[] }>;

export const Layout = defineComponent<{}, {}, string, Slots>((_, { slots }) => {
  return () => (
    <>
      <header class="flex max-h-16 min-h-16 items-center gap-6 border-b px-4">
        <HeaderNavigation />
        <div class="ml-auto flex gap-2">
          <GithubButton />
          <ThemeButton />
        </div>
      </header>
      <main class="grow">{slots.default()}</main>
    </>
  );
});
