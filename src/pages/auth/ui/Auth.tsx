import { defineComponent, ref } from 'vue';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { toast } from 'vue-sonner';

import { whenever } from '@vueuse/core';

import { Loader2 } from 'lucide-vue-next';

import { GithubLogoIcon } from '@radix-icons/vue';
import { Button } from '@shadcn/button';

import { GITHUB_AUTHORIZE_ENDPOINT } from '@constants/api';
import { AppRoutes } from '@constants/routes';
import { authToken } from '@constants/tokens';

type AuthResponse = {
  access_token: string;
  scope: string;
  token_type: string;
};

const url = new URL(GITHUB_AUTHORIZE_ENDPOINT);
url.searchParams.set('client_id', import.meta.env.VITE_CLIENT_ID);
url.searchParams.set('redirect_uri', new URL(import.meta.url).origin + '/auth');
url.searchParams.set('allow_signup', 'false');

export const Auth = defineComponent(() => {
  const router = useRouter();
  const route = useRoute();

  const githubLink = ref<HTMLLinkElement>();

  const code = computed(() => {
    if (typeof route.query.code === 'string') {
      return route.query.code;
    }

    return null;
  });

  whenever(
    code,
    (codeValue) => {
      const authUrl = new URL(import.meta.env.VITE_AUTH_APP_URL);
      authUrl.searchParams.set('code', codeValue);

      fetch(authUrl)
        .then((response) => {
          if (response.status === 400) {
            throw new Error();
          }

          return response.json();
        })
        .then((data: AuthResponse) => {
          authToken.value = data.access_token;
          void router.push({ name: AppRoutes.Home });
        })
        .catch(() => {
          authToken.value = null;
          toast('Something went wrong', {
            action: {
              label: 'Try again',
              onClick: () => {
                githubLink.value?.click();
              },
            },
          });
        });
    },
    { immediate: true }
  );

  return () => (
    <div class="flex h-dvh w-dvw items-center justify-center">
      <Button size="lg" disabled={Boolean(code.value)}>
        <a
          href={url.toString()}
          target="_self"
          class="flex items-center"
          ref={githubLink}
        >
          {code.value ? (
            <>
              <Loader2 class="mr-2 size-4 animate-spin" />
              Please wait
            </>
          ) : (
            <>
              <GithubLogoIcon class="mr-2 size-4" />
              Continue with GitHub
            </>
          )}
        </a>
      </Button>
    </div>
  );
});
