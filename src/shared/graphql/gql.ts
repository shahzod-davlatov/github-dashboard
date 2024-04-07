/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n      query UserOverview($login: String!) {\n        user(login: $login) {\n          bio\n          company\n          location\n          login\n          name\n          url\n          websiteUrl\n          status {\n            id\n          }\n          followers {\n            totalCount\n          }\n          following {\n            totalCount\n          }\n          lists {\n            totalCount\n          }\n          repositories {\n            totalCount\n          }\n          organizations {\n            totalCount\n          }\n          packages {\n            totalCount\n          }\n          pinnedItems {\n            totalCount\n          }\n          projects {\n            totalCount\n          }\n          sponsoring {\n            totalCount\n          }\n          sponsors {\n            totalCount\n          }\n          starredRepositories {\n            totalCount\n          }\n          watching {\n            totalCount\n          }\n          contributionsCollection {\n            totalIssueContributions\n            totalCommitContributions\n            totalRepositoryContributions\n            totalPullRequestContributions\n            totalPullRequestReviewContributions\n          }\n        }\n      }\n    ':
    types.UserOverviewDocument,
  '\n      query User($login: String!) {\n        user(login: $login) {\n          id\n          name\n          login\n          url\n          avatarUrl\n        }\n      }\n    ':
    types.UserDocument,
  '\n      query Viewer {\n        viewer {\n          id\n          name\n          login\n          avatarUrl\n        }\n      }\n    ':
    types.ViewerDocument,
  '\n      query UserSearch($query: String!) {\n        search(query: $query, type: USER, first: 10) {\n          nodes {\n            ... on User {\n              name\n              login\n              id\n              avatarUrl\n            }\n          }\n        }\n      }\n    ':
    types.UserSearchDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      query UserOverview($login: String!) {\n        user(login: $login) {\n          bio\n          company\n          location\n          login\n          name\n          url\n          websiteUrl\n          status {\n            id\n          }\n          followers {\n            totalCount\n          }\n          following {\n            totalCount\n          }\n          lists {\n            totalCount\n          }\n          repositories {\n            totalCount\n          }\n          organizations {\n            totalCount\n          }\n          packages {\n            totalCount\n          }\n          pinnedItems {\n            totalCount\n          }\n          projects {\n            totalCount\n          }\n          sponsoring {\n            totalCount\n          }\n          sponsors {\n            totalCount\n          }\n          starredRepositories {\n            totalCount\n          }\n          watching {\n            totalCount\n          }\n          contributionsCollection {\n            totalIssueContributions\n            totalCommitContributions\n            totalRepositoryContributions\n            totalPullRequestContributions\n            totalPullRequestReviewContributions\n          }\n        }\n      }\n    '
): (typeof documents)['\n      query UserOverview($login: String!) {\n        user(login: $login) {\n          bio\n          company\n          location\n          login\n          name\n          url\n          websiteUrl\n          status {\n            id\n          }\n          followers {\n            totalCount\n          }\n          following {\n            totalCount\n          }\n          lists {\n            totalCount\n          }\n          repositories {\n            totalCount\n          }\n          organizations {\n            totalCount\n          }\n          packages {\n            totalCount\n          }\n          pinnedItems {\n            totalCount\n          }\n          projects {\n            totalCount\n          }\n          sponsoring {\n            totalCount\n          }\n          sponsors {\n            totalCount\n          }\n          starredRepositories {\n            totalCount\n          }\n          watching {\n            totalCount\n          }\n          contributionsCollection {\n            totalIssueContributions\n            totalCommitContributions\n            totalRepositoryContributions\n            totalPullRequestContributions\n            totalPullRequestReviewContributions\n          }\n        }\n      }\n    '];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      query User($login: String!) {\n        user(login: $login) {\n          id\n          name\n          login\n          url\n          avatarUrl\n        }\n      }\n    '
): (typeof documents)['\n      query User($login: String!) {\n        user(login: $login) {\n          id\n          name\n          login\n          url\n          avatarUrl\n        }\n      }\n    '];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      query Viewer {\n        viewer {\n          id\n          name\n          login\n          avatarUrl\n        }\n      }\n    '
): (typeof documents)['\n      query Viewer {\n        viewer {\n          id\n          name\n          login\n          avatarUrl\n        }\n      }\n    '];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      query UserSearch($query: String!) {\n        search(query: $query, type: USER, first: 10) {\n          nodes {\n            ... on User {\n              name\n              login\n              id\n              avatarUrl\n            }\n          }\n        }\n      }\n    '
): (typeof documents)['\n      query UserSearch($query: String!) {\n        search(query: $query, type: USER, first: 10) {\n          nodes {\n            ... on User {\n              name\n              login\n              id\n              avatarUrl\n            }\n          }\n        }\n      }\n    '];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
