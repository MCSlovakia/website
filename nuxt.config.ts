// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    'remixicon/fonts/remixicon.css',
    '@/assets/global.css',
  ],
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/i18n',
  ],
  i18n: {
    defaultLocale: 'sk',
    locales: [
      { code: 'sk', name: 'Slovenčina', file: 'sk.json', language: 'sk-SK' },
      { code: 'en', name: 'English', file: 'en.json', language: 'en-US' },
    ]
  }
});