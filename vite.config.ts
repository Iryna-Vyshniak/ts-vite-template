import { defineConfig } from "vite";

export default defineConfig({
    // Reference: https://vitejs.dev/guide/static-deploy.html#github-pages
    build: {
        rollupOptions: {
            input: "dist/app.js",
        },
    },
    base: "/ts-vite-template/",
});