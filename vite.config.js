import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild', // o 'terser' si necesitas más compresión
    sourcemap: false,
    cssCodeSplit: true,
    target: 'es2017',
  }
});
