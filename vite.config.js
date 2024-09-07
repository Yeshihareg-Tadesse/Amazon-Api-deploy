import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html' // Ensure this path is correct
      }
    }
  }
});
