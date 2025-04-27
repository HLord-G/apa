import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss()
  ],
  server:{
    port:"8888",
    host: true, // para ma-access sa network (LAN)
  }
});