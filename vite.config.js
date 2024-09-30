import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Memetakan permintaan API ke backend
      '/send-email': {
        target: 'https://chat-be-psi.vercel.app/', // URL backend
        changeOrigin: true,
      },
    },
  },
})
