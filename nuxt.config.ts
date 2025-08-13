// https://nuxt.com/docs/api/configuration/nuxt-config
// Temporary declaration to satisfy TypeScript in editors before Nuxt generates types
// This avoids false errors like "Cannot find name 'defineNuxtConfig'" during initial setup.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const defineNuxtConfig: any;

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