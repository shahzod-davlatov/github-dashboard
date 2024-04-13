import { client } from '@api';

import { graphql } from '@graphql';

export const userStarsRequest = (login: string, after: null | string) =>
  client.request(
    graphql(`
      query UserStars($login: String!, $after: String) {
        user(login: $login) {
          starredRepositories(first: 25, after: $after) {
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
              forkCount
              isFork
              isArchived
              isLocked
            }
          }
        }
      }
    `),
    { login, after }
  );
