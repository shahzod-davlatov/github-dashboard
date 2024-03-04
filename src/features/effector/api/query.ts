import { client } from '@api';

import { graphql } from '@graphql';

export const effectorRequest = (size: number) =>
  client.value.request(
    graphql(`
      query Viewer($size: Int) {
        viewer {
          id
          name
          login
          avatarUrl(size: $size)
        }
      }
    `),
    { size }
  );
