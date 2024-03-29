import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    },
  },
  server: {
    port: 3001
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/scss/foundations/_variables.scss";
          @import "@/scss/foundations/_functions.scss";
          @import "@/scss/foundations/_mixins.scss";
          @import "@/scss/foundations/_fonts.scss";
          @import "@/scss/foundations/_main.scss";
        `,
      },
    },
  },
});