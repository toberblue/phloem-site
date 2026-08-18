// Multi-page build. Vite's zero-config build only bundles the root
// index.html; each page added here becomes its own entry with the same
// hashed-asset pipeline. app.js serves dist/ as plain files, so
// /questions/ resolves to its index.html without any server-side routing.
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        questions: resolve(import.meta.dirname, 'questions/index.html'),
      },
    },
  },
});
