import { client } from '@api';

import { graphql } from '@graphql';

export const userOverviewRequest = (login: string) =>
  client.request(
    graphql(`
      query UserOverview($login: String!) {
        user(login: $login) {
          bio
          company
          location
          login
          name
          url
          websiteUrl
          status {
            id
          }
          followers {
            totalCount
          }
          following {
            totalCount
          }
          lists {
            totalCount
          }
          repositories {
            totalCount
          }
          organizations {
            totalCount
          }
          packages {
            totalCount
          }
          pinnedItems {
            totalCount
          }
          projects {
            totalCount
          }
          sponsoring {
            totalCount
          }
          sponsors {
            totalCount
          }
          starredRepositories {
            totalCount
          }
          watching {
            totalCount
          }
          contributionsCollection {
            totalIssueContributions
            totalCommitContributions
            totalRepositoryContributions
            totalPullRequestContributions
            totalPullRequestReviewContributions
          }
        }
      }
    `),
    { login }
  );
