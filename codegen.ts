import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './schema.docs.graphql',
  documents: ['src/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/shared/graphql/': {
      preset: 'client',
      config: {
        maybeValue: 'T',
        useTypeImports: true,
        avoidOptionals: true,
        skipTypename: true,
        scalars: {
          URI: 'string',
        },
      },
    },
  },
};

export default config;
