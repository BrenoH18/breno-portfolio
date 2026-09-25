import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuração padrão do Vite para React + TypeScript.
// Não há necessidade de plugins adicionais para o MVP.
export default defineConfig({
  plugins: [react()],
});
