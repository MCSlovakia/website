<template>
  <div class="bg-mcs-grey flex flex-col p-5 justify-start items-start gap-5 rounded">
    <img v-if="icon" :src="icon" alt="Icon">
    <div class="flex flex-col gap-2">
      <h3 class="font-semibold text-xl">{{ title }}</h3>
      <!-- Render HTML description if provided, else plain text -->
      <p v-if="descriptionHtml" class="text-txt-black-sec" v-html="descriptionHtml"></p>
      <p v-else class="text-txt-black-sec">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title?: string;
    description?: string;
    descriptionHtml?: string; // optional rich HTML version
    icon?: string;
  }>();
</script>