<template>
  <div class="bg-mcs-grey flex flex-col p-5 justify-start items-start gap-5 rounded">
    <img v-if="icon" :src="icon" alt="Icon">
    <div class="flex flex-col gap-2">
      <h3 class="font-semibold text-xl">{{ title }}</h3>
      <p class="text-txt-black-sec">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title?: string;
    description?: string;
    icon?: string;
  }>();
</script>