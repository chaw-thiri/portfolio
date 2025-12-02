import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to your repository name if deploying to GitHub Pages
  // For example, if your repo is https://github.com/username/portfolio
  // then base should be '/portfolio/'
  // If deploying to custom domain or username.github.io, use '/'
  base: '/portfolio/',
})
