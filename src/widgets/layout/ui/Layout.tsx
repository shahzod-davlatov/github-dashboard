import { Suspense, defineAsyncComponent, defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import Skeleton from 'primevue/skeleton';

import { UserSelect } from '@features/user-select';

import { GithubButton } from '@ui/github-button';
import { ThemeButton } from '@ui/theme-button';

import { APP_ROUTES } from '@constants/routes';

import type { SlotsType, VNode } from 'vue';

type Slots = SlotsType<{ default: () => VNode[] }>;

const AsyncViewerLogo = defineAsyncComponent(() =>
  import('@entities/viewer').then((module) => module.ViewerLogo)
);

export const Layout = defineComponent<{}, {}, string, Slots>((_, { slots }) => {
  const router = useRouter();

  const handleClick = () => {
    void router.push({ name: APP_ROUTES.SETTINGS });
  };

  return () => (
    <>
      <header class="flex items-center gap-4 border-b border-surface-200 p-4 dark:border-surface-700">
        <UserSelect />
        <div class="ml-auto flex items-center gap-2">
          <GithubButton />
          <ThemeButton />
          <Suspense>
            {{
              default: () => <AsyncViewerLogo onClick={handleClick} />,
              fallback: () => <Skeleton shape="circle" size="2rem" />,
            }}
          </Suspense>
        </div>
      </header>
      <main class="grow p-4">{slots.default()}</main>
    </>
  );
});
