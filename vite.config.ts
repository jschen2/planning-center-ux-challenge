import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"

export default defineConfig({
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@forward "src/global/styles.scss";`,
        silenceDeprecations: ["legacy-js-api"],
      },
    },
  },
  plugins: [react(), dts()],
})
