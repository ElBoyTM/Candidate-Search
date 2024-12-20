import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv, { parse } from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
