<template>
  <div>
    <Header/>
    <NuxtRouteAnnouncer />
    <NuxtPage />
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
        async: true,
        src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`
      },
      {
        children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date());
gtag('config', '${gaId}');`
      }
    ]
  });
}
</script>

