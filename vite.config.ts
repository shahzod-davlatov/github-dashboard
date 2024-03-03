import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './src/pages'),
      '@features': path.resolve(__dirname, './src/features'),
      '@constants': path.resolve(__dirname, './src/shared/constants'),
      '@graphql': path.resolve(__dirname, './src/shared/graphql'),
      '@shadcn': path.resolve(__dirname, './src/shared/shadcn'),
    },
  },
});
