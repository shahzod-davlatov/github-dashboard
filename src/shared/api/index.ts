import { GraphQLClient } from 'graphql-request';

import { GRAPHQL_ENDPOINT } from '@constants/api';
import { APP_ROUTES } from '@constants/routes';

import { routerInstance } from '@lib/router';
import { errorToast } from '@lib/sonner';

import { authToken } from '@localStorages/tokens';

export const client = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: () => ({ authorization: `Bearer ${authToken.value}` }),
  responseMiddleware: (response) => {
    if (
      response instanceof Error &&
      response.message.includes('"status":401')
    ) {
      authToken.value = null;
      errorToast('Access error');
      void routerInstance.instance?.push({ name: APP_ROUTES.AUTH });
    }
  },
});
