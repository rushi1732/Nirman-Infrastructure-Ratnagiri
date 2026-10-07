import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@react-three/drei')) {
              return 'vendor-three-drei'
            }
            if (id.includes('@react-three/fiber')) {
              return 'vendor-three-fiber'
            }
            if (id.includes('three')) {
              return 'vendor-three-core'
            }
            if (id.includes('gsap')) {
              return 'vendor-gsap'
            }
            if (id.includes('framer-motion') || id.includes('motion')) {
              return 'vendor-motion'
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons'
            }
            if (id.includes('@radix-ui')) {
              return 'vendor-radix'
            }
            if (id.includes('lenis')) {
              return 'vendor-lenis'
            }
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
              return 'vendor-react'
            }
          }
        },
      },
    },
    chunkSizeWarningLimit: 850,
  },
})


