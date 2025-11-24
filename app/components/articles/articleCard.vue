<template>
  <NuxtLink
      :to="`/posts/${slug}`"
      class="rounded hover:shadow-[0px_4px_10px_0px_rgba(9,24,81,0.15)] transition duration-200 bg-mcs-grey group"
  >
    <NuxtImg
        class="w-full h-[240px] object-cover rounded-t"
        :src="img"
        alt="Article image"
        width="100%"
        height="200"
        loading="lazy"
    />
    <div class="px-5 pb-5 pt-4 flex flex-col gap-3">
      <h3 class="text-xl font-medium text-txt-black-prim transition-colors duration-200 group-hover:text-mcs-orange">
        {{ title }}
      </h3>
      <p class="text-base text-txt-black-sec line-clamp-4">{{ excerpt }}</p>
      <p class="text-xs text-txt-black-sec font-light">{{ author }}</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  img?: string
  title?: string
  excerpt?: string
  author?: string
  slug: string
}>()
</script>
