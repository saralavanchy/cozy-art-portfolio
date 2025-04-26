import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cozy-art-portfolio/',
  plugins: [react()],
});
