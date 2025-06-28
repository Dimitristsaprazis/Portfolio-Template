import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  
  // Build configuration
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue'],
          ui: ['@heroicons/vue', 'naive-ui'],
          animations: ['aos', '@vueuse/motion']
        }
      }
    }
  },
  
  // Development server configuration
  server: {
    port: 3000,
    open: true,
    host: true
  },
  
  // Preview server configuration
  preview: {
    port: 4173,
    host: true
  },
  
  // Resolve aliases
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@assets': resolve(__dirname, 'src/assets')
    }
  },
  
  // CSS configuration
  css: {
    devSourcemap: true
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: ['vue', '@heroicons/vue', 'naive-ui', 'aos', '@vueuse/motion']
  }
})