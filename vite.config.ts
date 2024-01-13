// import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"



export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    // alias: {
    //   '@': fileURLToPath(new URL('./src', import.meta.url))
    // },
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  }
})
