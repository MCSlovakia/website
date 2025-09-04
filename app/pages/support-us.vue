<template>
  <div class=" bg-mcs-blue min-h-screen lg:px-auto px-5 flex justify-center lg:items-end items-end overflow-visible sm:overflow-x-hidden">
    <div class="xl:w-[1180px] lg:w-[940px] w-full flex lg:pt-0 pt-14 lg:flex-row md:fle flex-col justify-between lg:items-center items-center">
      <div class="w-[580px] flex flex-col gap-6">
    <h1 class="text-txt-white-prim md:text-5xl sm:text-3xl text-2xl">{{ t('support.hero.title') }}</h1>
    <p class="text-txt-white-sec md:text-[18px] text-base">{{ t('support.hero.desc') }}</p>
        <div class="flex gap-4 sm:flex-row flex-col">
          <ButtonPrim
      :text="t('support.hero.ctaWays')"
              :onClick="() => $router.push('/support-us#ways-to-support')"
          />
          <ButtonSec
              class="text-txt-white-prim"
      :text="t('support.hero.ctaPartner')"
              :onClick="() => $router.push('/partners')"
          />
        </div>
      </div>
     <div class="lg:flex-shrink-0 lg:w-auto w-full lg:mt-0 mt-8 lg:relative lg:-left-10 sm:flex sm:justify-end flex justify-center">
        <NuxtImg
            src="/components/support/hero.png"
            class="md:h-[800px] md:w-auto h-full object-contain lg:object-right md:object-right-bottom xs:object-bottom object-center"
            alt="Hero Image"
        />
      </div>
    </div>
  </div>

  <div class="flex lg:mx-auto mx-5 justify-center">
    <div class="flex flex-col md:gap-6 gap-5 md:mt-[90px] mt-[50px] xl:w-[1180px] lg:w-[940px] w-full">
  <h2 class="md:text-[40px] text-3xl">{{ t('support.enables.title') }}</h2>
      <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-4">
        <Card
            v-for="(item, idx) in CardContent"
            :key="idx"
            :icon="item.icon"
            :title="item.title"
            :description="item.description"
        />
      </div>
    </div>
  </div>

  <Transparency />

  <div class="flex lg:mx-auto mx-5 justify-center" id="ways-to-support">
    <div class="flex flex-col md:gap-6 gap-5 md:mt-[90px] mt-[50px] xl:w-[1180px] lg:w-[940px] w-full">
  <h2 class="md:text-[40px] text-3xl">{{ t('support.ways.title') }}</h2>
      <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-4">
        <SupportCard
            v-for="(item, idx) in SupportCardContent"
            :key="idx"
            :title="item.title"
            :description="item.description"
            :points="item.points"
            :paragraph="item.paragraph"
            :buttonText="item.buttonText"
            :button-on-click="item.buttonOnClick"
            
        />
      </div>
    </div>
  </div>

  <JoinUs />
</template>

<script setup lang="ts">
import Card from '~/components/card.vue';
import Transparency from "~/components/support/transparency.vue";
import SupportCard from "~/components/support/supportCard.vue";
import JoinUs from "~/components/joinUs.vue";
import ButtonPrim from '~/components/buttonPrim.vue';
import ButtonSec from '~/components/buttonSec.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
import { useI18n } from '#imports';
const { t } = useI18n();

import supportLearning from '~/assets/icons/support/learning.svg'
import supportSocialImpact from '~/assets/icons/support/social-impact.svg'
import supportCriticalThinking from '~/assets/icons/support/critical-thinking.svg'
import supportTransparency from '~/assets/icons/support/transparency.svg'
import supportPartner from '~/assets/icons/support/partner.svg'
import supportCommunity from '~/assets/icons/support/community.svg'

const CardContent = [
  {
    icon: supportLearning,
    title: t('support.enables.items.leaders.title'),
    description: t('support.enables.items.leaders.desc'),
  },
  {
    icon: supportSocialImpact,
    title: t('support.enables.items.impact.title'),
    description: t('support.enables.items.impact.desc'),
  },
  {
    icon: supportCriticalThinking,
    title: t('support.enables.items.criticalThinkingDialogue.title'),
    description: t('support.enables.items.criticalThinkingDialogue.desc'),
  },
  {
    icon: supportTransparency,
    title: t('support.enables.items.transparencyNonprofit.title'),
    description: t('support.enables.items.transparencyNonprofit.desc'),
  },
  {
    icon: supportPartner,
    title: t('support.enables.items.partnershipValue.title'),
    description: t('support.enables.items.partnershipValue.desc'),
  },
  {
    icon: supportCommunity,
    title: t('support.enables.items.communityChange.title'),
    description: t('support.enables.items.communityChange.desc'),
  },
];

const SupportCardContent = [
  {
    title: t('support.ways.taxDonate.title'),
    description: t('support.ways.taxDonate.desc'),
    points: [
      t('support.ways.taxDonate.points.0'),
      t('support.ways.taxDonate.points.1'),
      t('support.ways.taxDonate.points.2'),
    ],
    paragraph: t('support.ways.taxDonate.paragraph'),
    buttonText: t('support.ways.taxDonate.button'),
    buttonOnClick: () => {
      router.push('/partners');
    },
  },
  {
    title: t('support.ways.oneTimeDonation.title'),
    description: t('support.ways.oneTimeDonation.desc'),
    points: [
      t('support.ways.oneTimeDonation.points.0'),
      t('support.ways.oneTimeDonation.points.1'),
      t('support.ways.oneTimeDonation.points.2'),
    ],
    paragraph: t('support.ways.oneTimeDonation.paragraph'),
    buttonText: t('support.ways.oneTimeDonation.button'),
    buttonOnClick: () => {
      window.location.href = 'mailto:info@mcslovakia.sk';
    },
  },
  {
    title: t('support.ways.recurringSupport.title'),
    description: t('support.ways.recurringSupport.desc'),
    points: [
      t('support.ways.recurringSupport.points.0'),
      t('support.ways.recurringSupport.points.1'),
      t('support.ways.recurringSupport.points.2'),
    ],
    paragraph: t('support.ways.recurringSupport.paragraph', { email: 'info@mcslovakia.com' }),
    buttonText: t('support.ways.recurringSupport.button'),
    buttonOnClick: () => {
      window.location.href = 'mailto:info@mcslovakia.sk';
    },
  },
];
</script>

<style>

</style>