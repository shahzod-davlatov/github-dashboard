import { client } from '@api';

import { graphql } from '@graphql';

export const userRequest = () =>
  client.value.request(
    graphql(`
      query User {
        viewer {
          id
          name
          login
          avatarUrl
        }
      }
    `)
  );
