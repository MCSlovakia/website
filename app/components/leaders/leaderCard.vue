<template>
  <div class="rounded bg-mcs-grey">
    <NuxtImg
      class="w-full xl:h-[400px] h-[330px] object-cover rounded-t"
      :src="img"
      alt="Leader image"
      width="100%"
      loading="lazy"
    />
    <div class="px-4 py-3 flex flex-col justify-between items-start">
      <div class="flex justify-between w-full">
        <h3 class="text-base font-semibold text-txt-black-prim">{{ name }}</h3>
        <div class="flex items-end gap-2">
          <NuxtLink
              v-if="instagram"
              class="text-mcs-blue hover:text-mcs-orange transition-colors duration-200 text-xl"
              :href="`https://www.instagram.com/${instagram}`"
              target="_blank"
          >
            <i class="ri-instagram-fill"></i>
          </NuxtLink>
          <NuxtLink
              v-if="linkedin"
              class="text-mcs-blue hover:text-mcs-orange transition-colors duration-200 text-xl"
              :href="`https://www.linkedin.com/in/${linkedin}`"
              target="_blank"
          >
            <i class="ri-linkedin-box-fill"></i>
          </NuxtLink>
        </div>
      </div>
      <p class="text-[12px] text-txt-black-sec mt-1">{{ role }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  img: string
  name: string
  role: string
  instagram?: string
  linkedin?: string
}>()
</script>
