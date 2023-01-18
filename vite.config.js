import { resolve } from "path";
import { defineConfig } from "vite";
// import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  envDir: resolve(__dirname),
  publicDir: resolve(__dirname, "public"),
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        "privacy-policy": resolve(__dirname, "src/privacy-policy/index.html"),
        "route-viz": resolve(__dirname, "src/route-viz/index.html"),
      },
    },
    outDir: resolve(__dirname, "dist"),
  },
  plugins: [
    // VitePWA({
    //   // injectRegister: 'inline',
    //   // registerType: 'autoUpdate',
    //   // devOptions: {
    //   //   enabled: true
    //   // },
    //   workbox: {
    //     globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
    //   //   runtimeCaching: [
    //   //     {
    //   //       urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
    //   //       handler: 'CacheFirst',
    //   //       options: {
    //   //         cacheName: 'google-fonts-cache',
    //   //         expiration: {
    //   //           maxEntries: 10,
    //   //           maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
    //   //         },
    //   //         cacheableResponse: {
    //   //           statuses: [0, 200]
    //   //         }
    //   //       }
    //   //     },
    //   //     {
    //   //       urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
    //   //       handler: 'CacheFirst',
    //   //       options: {
    //   //         cacheName: 'gstatic-fonts-cache',
    //   //         expiration: {
    //   //           maxEntries: 10,
    //   //           maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
    //   //         },
    //   //         cacheableResponse: {
    //   //           statuses: [0, 200]
    //   //         },
    //   //       }
    //   //     }
    //   //   ]
    //   },
    // }),
  ],
});
