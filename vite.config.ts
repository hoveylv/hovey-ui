/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from './config/unocss'

export default defineConfig({
  plugins: [vue(), vueJsx({}), Unocss()],
  build: {
    minify: 'esbuild',
    sourcemap: true,
    cssCodeSplit: true,
    lib: {
      entry: './src/index.ts',
      name: 'HoveyUI',
      fileName: 'hovey-ui',
      formats: ['es', 'umd', 'iife'], // 导出模块类型
    },
    outDir: './dist',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
})
