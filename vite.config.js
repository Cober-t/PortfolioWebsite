import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://jorgetejado.com/",
  resolve: {
    alias: {
      $fonts: resolve('./src/assets/fonts'),
      $iconsAndCV: resolve('./src/assets')
    }
  }
})
