import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Make sure this is correct
    rollupOptions: {
      input: {
        main: './index.html',
        // Add other entry points if needed
      }
    }
  }
});
