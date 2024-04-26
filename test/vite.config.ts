import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
//svg批量处理插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),createSvgIconsPlugin({
    iconDirs:[path.resolve(__dirname,'src/assets/svgs')],
    symbolId:'icon-[name]'
  })],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'src')
    }
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  }
})
