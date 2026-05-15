<template>
  <div>
    <Header/>
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <CookieConsent />
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { public: publicConfig } = useRuntimeConfig();
const gaId = publicConfig.gaId as string | undefined;

if (gaId) {
  useHead({
    script: [
      {
        key: 'ga-gtag-js',
        id: 'ga-gtag-js',
        async: true,
        src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`
      },
      {
        key: 'ga-gtag-inline',
        id: 'ga-gtag-inline',
        textContent: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});
gtag('js', new Date());
gtag('config', '${gaId}', { anonymize_ip: true });`
      }
    ]
  });
}
</script>

