import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      // The source entry is dev.html; scripts/finalize-dist.mjs renames the built page to dist/index.html.
      rollupOptions: { input: path.resolve(__dirname, 'dev.html') },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
