import { computed } from 'vue';

import { GraphQLClient } from 'graphql-request';

import { GRAPHQL_ENDPOINT } from '@constants/api';
import { AppRoutes } from '@constants/routes';
import { authToken } from '@constants/tokens';

import { routerInstance } from '@lib/router';
import { errorToast } from '@lib/sonner';

export const client = computed(
  () =>
    new GraphQLClient(GRAPHQL_ENDPOINT, {
      headers: { authorization: `Bearer ${authToken.value}` },
      responseMiddleware: (response) => {
        if (
          response instanceof Error &&
          response.message.includes('"status":401')
        ) {
          authToken.value = null;
          errorToast('Access error');
          void routerInstance.value?.push({ name: AppRoutes.Auth });
        }
      },
    })
);
