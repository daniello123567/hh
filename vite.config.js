import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import 'process-env'

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: '**/*.{jsx,tsx}',
  })],
  define: {
    'process.env': {},
  }
})
