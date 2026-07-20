import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Vite configuration
//
// base: '/' is correct for Netlify, Vercel, and GitHub Pages user/org sites
// or any GitHub Pages site using a custom domain (i.e. deployed at the
// domain root). If you deploy this as a GitHub Pages *project* site without
// a custom domain (served at https://<user>.github.io/<repo-name>/), set:
//   base: '/<repo-name>/'
// and update `pathSegmentsToKeep` in public/404.html to `1` — see
// README.md "Deployment" for the full walkthrough.
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'es2019',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
  server: {
    port: 5173,
  },
});
