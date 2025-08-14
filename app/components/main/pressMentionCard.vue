<template>
  <NuxtLink
    class="p-5 bg-mcs-grey rounded flex flex-col gap-4"
    to="/"
  >
    <div class="flex gap-4 items-center">
      <NuxtImg
          v-if="logo"
          :src="logo"
          width="60"
          height="60"
          alt="Press Mention Logo"
      />
      <div class="flex flex-col gap">
        <h3 class="text-xl font-semibold">
          {{ title }}
        </h3>
        <p v-if="author" class="text-xs">{{ author }}</p>
      </div>
    </div>
    <p class="md:text-[18px] text-base text-txt-black-sec">{{description}}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  logo?: string;
  title?: string;
  author?: string;
  description?: string;
}>();

</script>