<template>
  <div class="flex mx-auto justify-center items-center md:mt-[100px] mt-[60px] overflow-hidden">
    <div class="bg-mcs-blue sm:pt-[90px] sm:pb-[100px] pb-[60px] pt-[50px] h-auto xl:px-[50px] lg:px-[40px] px-5 rounded xl:w-[1280px] lg:w-[980px] w-full items-center flex flex-col gap-10">
      <div class="flex flex-col gap-4 lg:w-[870px] w-full overflow-hidden justify-center items-center">
  <h2 class="md:text-[40px] text-3xl text-txt-white-prim">{{ t('transparency.title') }}</h2>
  <p class="text-txt-white-sec sm:text-[18px]">{{ t('transparency.desc') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '#imports';
const { t } = useI18n();

</script>