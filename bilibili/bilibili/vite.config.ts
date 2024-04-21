import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path, { resolve } from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),createSvgIconsPlugin({
    iconDirs:[resolve(__dirname,'src/assets/svgs')],
    symbolId:'icon-[name]'
  })],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"src")
    }
  }
})
