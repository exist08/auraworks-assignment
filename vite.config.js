import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  // server:{
  //   allowedHosts: ["cbad-2401-4900-8820-43f4-98d8-691c-358a-a022.ngrok-free.app"]
  // }
})