import { VitePWA } from 'vite-plugin-pwa';

export default {
  plugins: [
    VitePWA({
      // injectRegister: 'inline',
      // registerType: 'autoUpdate',
      // devOptions: {
      //   enabled: true
      // },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      //   runtimeCaching: [
      //     {
      //       urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
      //       handler: 'CacheFirst',
      //       options: {
      //         cacheName: 'google-fonts-cache',
      //         expiration: {
      //           maxEntries: 10,
      //           maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
      //         },
      //         cacheableResponse: {
      //           statuses: [0, 200]
      //         }
      //       }
      //     },
      //     {
      //       urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
      //       handler: 'CacheFirst',
      //       options: {
      //         cacheName: 'gstatic-fonts-cache',
      //         expiration: {
      //           maxEntries: 10,
      //           maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
      //         },
      //         cacheableResponse: {
      //           statuses: [0, 200]
      //         },
      //       }
      //     }
      //   ]
      },
    }),
  ],
};
