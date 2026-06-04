import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Must match your GitHub repo name. Use '/' if the repo is username.github.io
  base: '/our-story/',
})
