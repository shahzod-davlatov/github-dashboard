import { client } from '@api';

import { graphql } from '@graphql';

export const userSearchRequest = (query: string) =>
  client.request(
    graphql(`
      query UserSearch($query: String!) {
        search(query: $query, type: USER, first: 10) {
          nodes {
            ... on User {
              name
              login
              id
              avatarUrl
            }
          }
        }
      }
    `),
    { query }
  );
