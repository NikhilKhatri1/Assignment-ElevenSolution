import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    theme: {
      extend: {
        animation: {
          blink: 'blink 1s infinite', // Add your custom blink animation
        },
      },
    },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
