import { client } from '@api';

import { graphql } from '@graphql';

export const userRepositoriesRequest = (login: string, after: null | string) =>
  client.request(
    graphql(`
      query UserRepositories($login: String!, $after: String) {
        user(login: $login) {
          repositories(first: 25, after: $after) {
            pageInfo {
              hasNextPage
              endCursor
            }
            nodes {
              id
              name
              description
              url
              primaryLanguage {
                name
                color
              }
              visibility
            }
          }
        }
      }
    `),
    { login, after }
  );
