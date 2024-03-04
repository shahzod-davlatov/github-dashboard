import { GRAPHQL_ENDPOINT } from '@constants/api';
import { authToken } from '@constants/tokens';

import { computed } from 'vue';

import { GraphQLClient } from 'graphql-request';

export const client = computed(
  () =>
    new GraphQLClient(GRAPHQL_ENDPOINT, {
      headers: { authorization: `Bearer ${authToken.value}` },
    })
);
