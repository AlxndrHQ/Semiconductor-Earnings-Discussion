import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Semiconductor-Earnings-Discussion/', // MUST MATCH REPO NAME
})