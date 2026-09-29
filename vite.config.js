import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        // Different port so it doesn't clash with the root react-lesson app (5173)
        port: 5174,
    },
})
