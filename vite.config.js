import { resolve } from "path";
import { defineConfig } from "vite";
import { VitePluginRadar } from 'vite-plugin-radar';
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
        "how-to-use": resolve(__dirname, "src/how-to-use/index.html"),
        install: resolve(__dirname, "src/install/index.html"),
        "help-support": resolve(__dirname, "src/help-support/index.html"),
        "route-viz": resolve(__dirname, "src/route-viz/index.html"),
      },
    },
    outDir: resolve(__dirname, "dist"),
  },
  plugins: [
    VitePluginRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-RR5ZXFRZ7G',
      },
    }),
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
