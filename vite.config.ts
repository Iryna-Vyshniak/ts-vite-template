import { defineConfig } from "vite";

export default defineConfig({
    // Reference: https://vitejs.dev/guide/static-deploy.html#github-pages
    build: {
        rollupOptions: {
            input: './src/app.ts',
        },
        outDir: './dist',
    },
    base: "/ts-vite-template/",
});