import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Позволяет переопределять base через переменную окружения BASE_PATH
  base: process.env.BASE_PATH ?? '/',
  plugins: [react()],
})
