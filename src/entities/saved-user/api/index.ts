import { client } from '@api';

import { graphql } from '@graphql';

export const savedUserRequest = (login: string) =>
  client.request(
    graphql(`
      query SavedUser($login: String!) {
        user(login: $login) {
          id
          name
          login
          avatarUrl
        }
      }
    `),
    { login }
  );
