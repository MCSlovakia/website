<template>
  <div class="flex sm:flex-row flex-col rounded bg-mcs-grey">
    <NuxtImg
      class="w-full xl:h-[400px] h-[330px] object-cover rounded-t"
      :src="img"
      alt="Leader image"
      width="100%"
      loading="lazy"
    />
    <div class="flex flex-col justify-between items-start pl-4 pr-5 py-5">
      <div class="flex flex-col gap-1">
        <h3 class="font-semibold text-xl">
          {{ name }}
        </h3>
        <p class="xl:text-base lg:text-[13px]  text-txt-black-sec">
          {{ description }}
        </p>
      </div>
      <div class="flex gap-2 items-center">
        <NuxtLink
          v-if="instagram"
          class="text-mcs-blue hover:text-mcs-orange transition-colors duration-200 text-2xl"
          :href="`https://www.instagram.com/${instagram}`"
          target="_blank"
        >
          <i class="ri-instagram-fill"></i>
        </NuxtLink>
        <NuxtLink
          v-if="linkedin"
          class="text-mcs-blue hover:text-mcs-orange transition-colors duration-200 text-2xl"
          :href="`https://www.linkedin.com/in/${linkedin}`"
          target="_blank"
        >
          <i class="ri-linkedin-box-fill"></i>
        </NuxtLink>
        <NuxtLink
          v-if="email"
          class="text-mcs-blue hover:text-mcs-orange transition-colors duration-200 text-base"
          :href="`mailto:${email}`"
        >
          {{ email }}
        </NuxtLink>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
const props = defineProps<{
  img: string
  name: string
  description: string
  instagram?: string
  linkedin?: string
  email?: string
}>()
</script>
