import path from 'path';
import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [vueJsx()],
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true',
  },
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './src/pages'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@features': path.resolve(__dirname, './src/features'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@ui': path.resolve(__dirname, './src/shared/ui'),
      '@api': path.resolve(__dirname, './src/shared/api'),
      '@constants': path.resolve(__dirname, './src/shared/constants'),
      '@lib': path.resolve(__dirname, './src/shared/lib'),
      '@localStorages': path.resolve(__dirname, './src/shared/localStorages'),
      '@graphql': path.resolve(__dirname, './src/shared/graphql'),
    },
  },
});
