import { defineConfig } from 'vite'

export default defineConfig({
    base: '/around-digiphy/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                mobile: 'mobile.html',
            }
        }
    }
})
