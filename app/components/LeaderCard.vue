<template>
  <article class="rounded overflow-hidden">
    <img :src="img" :alt="name" class="w-full h-[300px] object-cover" />
    <div class="bg-mcs-grey px-4 py-3">
      <div class="flex items-center justify-between">
        <h3 class="text-[16px] font-semibold text-txt-black-prim">{{ name }}</h3>
        <div class="flex gap-2 text-txt-black-sec text-[20px]">
          <!-- Remix Icons; allow override via slot if needed -->
          <slot name="socials">
            <i class="ri-instagram-line" aria-hidden="true"></i>
            <i class="ri-linkedin-line" aria-hidden="true"></i>
          </slot>
        </div>
      </div>
      <p class="text-[12px] text-txt-black-sec mt-1">{{ role }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  img: string
  name: string
  role: string
}>()
</script>
