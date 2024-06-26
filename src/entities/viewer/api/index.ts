import { client } from '@api';

import { graphql } from '@graphql';

export const viewerRequest = () =>
  client.request(
    graphql(`
      query Viewer {
        viewer {
          id
          name
          login
          avatarUrl
        }
      }
    `)
  );
