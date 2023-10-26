// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/world-gourmet/',
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/world-gourmet/favicon.svg',
        },
      ],
    },
  },
  devtools: { enabled: false },
  modules: ['@nuxt/content'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
