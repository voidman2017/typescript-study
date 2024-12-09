import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // 暂时注释掉，直到确认 scss 文件存在
        // additionalData: `@import "@/styles/variables.scss";`
      },
      less: {
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
}); 