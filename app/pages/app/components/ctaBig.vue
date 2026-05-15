<template>
  <div class="relative flex lg:px-auto px-5 justify-center md:mt-[90px] mt-[50px] bg-mcs-orange -mb-[100px] md:h-[800px] sm:h-[700px] h-[640px] overflow-hidden">
    <div class="flex flex-col md:gap-6 gap-5 xl:w-[1180px] lg:w-[940px] w-full">
      <div class="flex flex-col md:gap-6 gap-5 mt-[90px] w-[580px] items-start">
        <div class="flex flex-col md:gap-4 gap-3">
          <h2 class="md:text-[40px] text-3xl text-txt-white-prim">
            {{ props.title }}
          </h2>
          <p class="md:text-[18px] text-base text-[#FFD8B4]">
            {{ props.description }}
          </p>
        </div>
        <NuxtLink
          :to="props.buttonLink"
          class="text-[18px] pt-2.5 pb-3 px-6 rounded transition duration-100 ease-in-out bg-mcs-blue text-txt-white-prim hover:bg-[#314079]"
        >
          {{ props.buttonText }}
        </NuxtLink>
      </div>
      <NuxtImg
        src="/components/ctaBig.png"
        alt="Call to Action Image"
        class="absolute w-full max-w-[1104px] h-auto
         lg:h-[800px] sm:h-[500px] h-[380px]
         lg:mt-[200px] sm:mt-[300px] mt-[300px]
         xl:ml-[200px] lg:ml-[160px] md:ml-[100px] ml-0
         object-contain"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}>();
</script>