import { resolve } from 'path';
import { defineConfig } from 'vite';
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        news: resolve(__dirname, 'src/SubPage/News/news.html'),
        contact: resolve(__dirname, 'src/SubPage/Contact/contact.html'),
      },
    },
  },
});
