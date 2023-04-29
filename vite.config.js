import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/NasreenKhalid/Article-Summary-OpenAI-App.git",
  plugins: [react()],
})
