import { defineComponent, ref } from 'vue';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { whenever } from '@vueuse/core';

import Button from 'primevue/button';

import { authToken } from '@localStorages/tokens';

import { GITHUB_AUTHORIZE_ENDPOINT } from '@constants/api';
import { APP_ROUTES } from '@constants/routes';

import { errorToast } from '@lib/sonner';

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

  const handleClick = () => {
    githubLink.value?.click();
  };

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
          void router.push({ name: APP_ROUTES.HOME });
        })
        .catch(() => {
          authToken.value = null;
          errorToast('Something went wrong');
          void router.push({ name: APP_ROUTES.AUTH });
        });
    },
    { immediate: true }
  );

  return () => (
    <div class="flex h-dvh w-dvw items-center justify-center">
      <Button
        icon="pi pi-github"
        disabled={Boolean(code.value)}
        loading={Boolean(code.value)}
        label={code.value ? 'Please wait' : 'Continue with GitHub'}
        onClick={handleClick}
      />
      <a href={url.toString()} target="_self" class="hidden" ref={githubLink} />
    </div>
  );
});
