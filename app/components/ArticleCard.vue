<template>
  <article class="rounded overflow-hidden shadow-[0px_4px_10px_0px_rgba(9,24,81,0.15)] bg-mcs-grey group">
    <img :src="img" :alt="title" class="block w-full h-60 object-cover" />
    <div class="p-5 space-y-3">
      <h3 class="text-[20px] font-medium text-txt-black-prim transition-colors duration-200 group-hover:text-mcs-orange">
        {{ title }}
      </h3>
      <p class="text-[16px] text-txt-black-sec line-clamp-4">{{ excerpt }}</p>
      <p class="text-[14px] text-txt-black-sec font-light">{{ author }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  img: string
  title: string
  excerpt: string
  author: string
}>()
</script>
