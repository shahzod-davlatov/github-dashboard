import { defineComponent, defineAsyncComponent, Suspense } from 'vue';

import Skeleton from 'primevue/skeleton';

import { HeaderNavigation } from '@features/header-navigation';
import { UserSelect } from '@features/user-select';

import { GithubButton } from '@ui/github-button';
import { ThemeButton } from '@ui/theme-button';

import type { SlotsType, VNode } from 'vue';

type Slots = SlotsType<{ default: () => VNode[] }>;

const AsyncViewerLogo = defineAsyncComponent(() =>
  import('@entities/viewer').then((module) => module.ViewerLogo)
);

export const Layout = defineComponent<{}, {}, string, Slots>((_, { slots }) => {
  return () => (
    <>
      <header class="flex items-center gap-4 border-b border-surface-200 p-4 dark:border-surface-700">
        <UserSelect />
        <HeaderNavigation />
        <div class="ml-auto flex items-center gap-2">
          <GithubButton />
          <ThemeButton />
          <Suspense>
            {{
              default: () => <AsyncViewerLogo />,
              fallback: () => <Skeleton shape="circle" size="2rem" />,
            }}
          </Suspense>
        </div>
      </header>
      <main class="grow">{slots.default()}</main>
    </>
  );
});
