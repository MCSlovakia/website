<template>
  <article class="rounded overflow-hidden bg-mcs-grey/0 group">
    <img :src="img" :alt="title" class="w-full h-[220px] object-cover" />
    <div class="bg-mcs-grey p-5 space-y-3">
      <h3 class="text-[20px] font-semibold text-txt-black-prim transition-colors duration-200 group-hover:text-mcs-orange">{{ title }}</h3>
      <p class="text-[16px] text-txt-black-sec">{{ desc }}</p>
      <div class="flex items-center justify-between pt-1">
        <span class="text-[16px] text-txt-black-sec">{{ date }}</span>
        <ButtonSec :text="ctaText"  />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  img: string
  title: string
  desc: string
  date: string
  ctaText: string
}>()
</script>
