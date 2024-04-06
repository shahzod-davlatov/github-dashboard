import { defineComponent, defineAsyncComponent, Suspense } from 'vue';

import Skeleton from 'primevue/skeleton';

import { HeaderNavigation } from '@features/header-navigation';

import { GithubButton } from '@ui/github-button';
import { ThemeButton } from '@ui/theme-button';

import type { SlotsType, VNode } from 'vue';

type Slots = SlotsType<{ default: () => VNode[] }>;

const AsyncUserLogo = defineAsyncComponent(() =>
  import('@entities/user').then((module) => module.UserLogo)
);

export const Layout = defineComponent<{}, {}, string, Slots>((_, { slots }) => {
  return () => (
    <>
      <header class="flex items-center gap-6 border-b border-surface-200 p-4 dark:border-surface-700">
        <HeaderNavigation />
        <div class="ml-auto flex items-center gap-2">
          <GithubButton />
          <ThemeButton />
          <Suspense>
            {{
              default: () => <AsyncUserLogo />,
              fallback: () => <Skeleton shape="circle" size="2rem" />,
            }}
          </Suspense>
        </div>
      </header>
      <main class="grow">{slots.default()}</main>
    </>
  );
});
