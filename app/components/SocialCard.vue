<template>
  <div class="bg-mcs-grey flex flex-col p-5 justify-start items-start gap-4 rounded">
    <h3 class="font-semibold text-xl">Sledujte nás</h3>
    <div class="flex flex-row items-center gap-6">
      <NuxtLink
        v-for="(link, idx) in links"
        :key="idx"
        :to="link.url"
        :aria-label="link.name"
        class="text-mcs-blue hover:text-mcs-orange-light transition duration-150 text-4xl flex items-center"
      >
        <i :class="link.icon"></i>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = [
  { name: "LinkedIn", icon: "ri-linkedin-box-fill", url: "https://www.linkedin.com/company/model-conferences-slovakia/" },
  { name: "Instagram", icon: "ri-instagram-fill", url: "https://www.instagram.com/mc.slovakia/" },
  { name: "TikTok", icon: "ri-tiktok-fill", url: "https://www.tiktok.com/@mc.slovakia" },
];
</script>

<style scoped>
@media (max-width: 380px) {
  .icons-wrapper {
    justify-content: space-between;
  }
}
</style>
