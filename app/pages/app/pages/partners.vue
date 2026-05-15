<template>
  <div class="flex lg:px-auto px-5 justify-center md:mt-[90px] mt-[50px]">
    <div class="flex flex-col md:gap-6 gap-5 xl:w-[1180px] lg:w-[940px] w-full">
  <h2 class="md:text-[40px] text-3xl">{{ t('partnersPage.permanent') }}</h2>
      <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-4">
        <PartnerCard
            v-for="(p, idx) in partnersContent"
            :key="idx"
            :logo="p"
        />
      </div>
    </div>
  </div>

  <div class="flex lg:px-auto px-5 justify-center md:mt-[90px] mt-[50px]">
    <div class="flex flex-col md:gap-6 gap-5 xl:w-[1180px] lg:w-[940px] w-full">
  <h2 class="md:text-[40px] text-3xl">{{ t('partnersPage.project') }}</h2>
      <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-4">
        <PartnerCard
            v-for="(p, idx) in partnersContent"
            :key="idx"
            :logo="p"
        />
      </div>
    </div>
  </div>

  <CtaBig
      :title="t('partnersPage.cta.title')"
      :description="t('partnersPage.cta.desc')"
      :buttonText="t('partnersPage.cta.button')"
      buttonLink="/contacts"
  />

</template>

<script setup lang="ts">
import PartnerCard from "~/components/partners/partnerCard.vue";
import CtaBig from "~/components/ctaBig.vue";

import { useRouter } from "vue-router";
const router = useRouter();

import { useI18n } from '#imports';
const { t } = useI18n();

import partnerYubico from '~/assets/partners/partner=yubico.png'
import partnerDofe from '~/assets/partners/partner=dofe.png'

const partnersContent = [
  partnerYubico,
  partnerDofe
]
</script>