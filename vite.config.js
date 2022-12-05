import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/scss/foundations/_fonts.scss";`,
        additionalData: `@import "@/scss/foundations/_variables.scss";`,
        additionalData: `@import "@/scss/foundations/_functions.scss";`,
        additionalData: `@import "@/scss/foundations/_mixins.scss";`,
        additionalData: `@import "@/scss/foundations/_normalize.scss";`,
      }
    }
  }
})
