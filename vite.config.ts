/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Habilite o uso de funções globais como describe, it, e expect
    environment: 'jsdom', // Define o ambiente de teste como jsdom, necessário para testar componentes React
  },
})
