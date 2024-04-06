import { client } from '@api';

import { graphql } from '@graphql';

export const userRequest = (login: string) =>
  client.request(
    graphql(`
      query User($login: String!) {
        user(login: $login) {
          id
          name
          login
          url
          avatarUrl
        }
      }
    `),
    { login }
  );
