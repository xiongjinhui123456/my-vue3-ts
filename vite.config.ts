import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), //给 src 目录设置别名
    },
  },
  server: {
    host: '0.0.0.0', //允许局域网访问
    port: 5174, //自定义端口
    open: true, // 启动后自动打开浏览器
    proxy: {
      '/api': {
        target: 'http://locallhost:3000', //后端代理API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist', // 自定义打包目录
    sourcemap: true, //生成 sourceMap方便调试
  },
});
