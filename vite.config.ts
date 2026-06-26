import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain on GitHub Pages — base is '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
