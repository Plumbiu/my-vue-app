import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // build: {
  //   commonjsOptions: {
  //     include: []
  //   },
  //   rollupOptions: {
  //     maxParallelFileOps: 100,
  //   },
  // },
  // optimizeDeps: {
  //   disabled: false,
  //   include: [
  //   ]
  // }
})
