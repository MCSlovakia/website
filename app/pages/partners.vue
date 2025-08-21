<template>
  <div class="flex lg:px-auto px-5 justify-center md:mt-[90px] mt-[50px]">
    <div class="flex flex-col md:gap-6 gap-5 xl:w-[1180px] lg:w-[940px] w-full">
      <h2 class="md:text-[40px] text-3xl">Stáli partneri</h2>
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
      <h2 class="md:text-[40px] text-3xl">Projektoví partneri</h2>
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
      title="Staň sa partnerom"
      description="Staňte sa partnerom Model Conferences Slovakia a pomôžte nám rozvíjať kritické myslenie, dialóg a občiansku angažovanosť mladých. Vaša podpora znamená investíciu do vzdelania, hodnotovej výchovy a budúcnosti Slovenska. Spolu vieme formovať generáciu, ktorá bude meniť svet."
      buttonText="Staňte sa partnerom"
      buttonLink="/kontakt"
  />

</template>

<script setup lang="ts">
import PartnerCard from "~/components/partners/partnerCard.vue";
import CtaBig from "~/components/ctaBig.vue";

import { useRouter } from "vue-router";
const router = useRouter();

import {useI18n} from "#imports";
const { t } = useI18n()

import partnerBa from '~/assets/partners/partner=ba.png'
import partnerMxvez from '~/assets/partners/partner=mxvez.png'
import partnerOrange from '~/assets/partners/partner=nadacia-orange.png'
import partnerNivam from '~/assets/partners/partner=nivam.png'
import partnerSda from '~/assets/partners/partner=sda.png'
import partnerTatra from '~/assets/partners/partner=tatra.png'
import partnerVariant7 from '~/assets/partners/partner=Variant7.png'

const partnersContent = [
  partnerBa,
  partnerMxvez,
  partnerOrange,
  partnerNivam,
  partnerSda,
  partnerTatra,
  partnerVariant7,
]
</script>