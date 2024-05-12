import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        copy({
          targets: [{ src: 'netlify.toml', dest: 'dist' }],
        }),
      ],
    },
  },
})
