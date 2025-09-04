<template>
  <div class="flex mx-auto justify-center items-center md:mt-[100px] mt-[60px] overflow-hidden">
    <div class="bg-mcs-blue sm:pt-[90px] sm:pb-[100px] pb-[60px] pt-[50px] md:h-[370px] h-[430px] xl:px-[50px] lg:px-[40px] px-5 rounded xl:w-[1280px] lg:w-[980px] w-full cont">
      <div class="flex flex-col md:gap-6 gap-5 lg:w-[680px] sm:w-[500px] w-full overflow-hidden">
        <div class="flex flex-col gap-4">
          <h2 class="md:text-[40px] text-3xl text-txt-white-prim">{{t('home.volunteerCta.title')}}</h2>
          <p class="text-txt-white-sec sm:text-[18px]">{{t('home.volunteerCta.desc')}}</p>
        </div>
        <ButtonPrim
            class="inline-flex w-60 items-center justify-center"
            :text="t('home.volunteerCta.ctaVolunteer')"
            :onClick="() => $router.push('/partners')"
        />
      </div>
      <NuxtImg class="relative xl:-right-[730px] lg:-right-[550px] md:-right-[450px] md:-top-[200px] sm:-right-[400px] sm:-top-[200px] -right-[200px] -top-[40px] img" src="/components/join-us.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {useI18n} from "#imports";
const { t } = useI18n()
import ButtonPrim from "~/components/buttonPrim.vue";
</script>

<style>

@media screen and (max-width: 480px) {
  .img {
    display: none;
  }

  .cont {
    height: auto;
  }
}

</style>