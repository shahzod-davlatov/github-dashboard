import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './src/pages'),
      '@shadcn': path.resolve(__dirname, './src/shared/shadcn'),
    },
  },
})
