<template>
  <div class=" bg-mcs-blue min-h-screen lg:px-auto px-5 flex justify-center lg:items-center items-start overflow-hidden">
    <div class="xl:w-[1180px] lg:w-[940px] w-full flex lg:pt-0 pt-14 flex-row">
      <div class="w-[580px] flex flex-col gap-6">
        <h1 class="text-txt-white-prim md:text-5xl sm:text-3xl text-2xl">Podporte vzdelávanie a rozvoj budúcich lídrov </h1>
        <p class="text-txt-white-sec md:text-[18px] text-base">
          Pomôžte nám rozvíjať kritické myslenie, rečnícke schopnosti a záujem o verejné dianie u študentov z celého Slovenska. Či už ste jednotlivec alebo firma, vaša podpora má zmysel.
        </p>
        <div class="flex gap-4 sm:flex-row flex-col">
          <ButtonPrim
              text="Pozrieť spôsoby podpory"
              :onClick="() => $router.push('/support-us#ways-to-support')"
          />
          <ButtonSec
              class="text-txt-white-prim"
              text="Stáť sa partnerom"
              :onClick="() => $router.push('/partners')"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="flex lg:mx-auto mx-5 justify-center">
    <div class="flex flex-col md:gap-6 gap-5 md:mt-[90px] mt-[50px] xl:w-[1180px] lg:w-[940px] w-full">
      <h2 class="md:text-[40px] text-3xl">Vaša podpora umožňuje</h2>
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
      <h2 class="md:text-[40px] text-3xl">Spôsoby podpory</h2>
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

const CardContent = [
  {
    icon: new URL('/assets/icons/support/learning.svg', import.meta.url).href,
    title: 'Vzdelávanie budúcich lídrov',
    description: 'Vaša podpora pomáha formovať generáciu mladých, ktorí chcú zodpovedne ovplyvňovať svet okolo seba.',
  },
  {
    icon: new URL('/assets/icons/support/social-impact.svg', import.meta.url).href,
    title: 'Skutočný spoločenský dopad',
    description: 'Konferencie a programy MCS rozvíjajú schopnosti, ktoré mladí využijú v škole, práci aj verejnom živote.',
  },
  {
    icon: new URL('/assets/icons/support/critical-thinking.svg', import.meta.url).href,
    title: 'Podpora kritického myslenia adialógu',
    description: 'Investujete do zručností, ktoré budujú otvorenú, tolerantnú a informovanú spoločnosť.',
  },
  {
    icon: new URL('/assets/icons/support/transparency.svg', import.meta.url).href,
    title: 'Transparentná a nezisková organizácia',
    description: 'Každé euro smeruje priamo do vzdelávacích aktivít, nie do zisku. Sme otvorení a zodpovední voči darcom aj partnerom.',
  },
  {
    icon: new URL('/assets/icons/support/partner.svg', import.meta.url).href,
    title: 'Partnerstvo s dlhodobou hodnotou',
    description: 'Firmám ponúkame zmysluplnú spoluprácu, viditeľnosť a možnosť podieľať sa na rozvoji občianskej spoločnosti.',
  },
  {
    icon: new URL('/assets/icons/support/community.svg', import.meta.url).href,
    title: 'Komunita s vášňou pre zmenu',
    description: 'Pridáte sa k ľuďom, ktorým záleží na budúcnosti Slovenska – vzdelaných, angažovaných a ochotných konať.',
  },
];

const SupportCardContent = [
  {
    title: 'Darujte 2 % z daní',
    description: 'Rozhodnite, kam pôjde časť vašich daní. Podporte vzdelávanie a rozvoj mladých lídrov.',
    points: [
      'Stačí vyplniť formulár',
      'Pridať IČO: 57 034 265',
      'Odovzdať na daňový úrad alebo zamestnávateľovi. Nezabudnite na termín do konca apríla.',
    ],
    paragraph: 'Rozhodnite, kam pôjde časť vašich daní. Podporte vzdelávanie a rozvoj mladých lídrov.',
    buttonText: 'Stáť sa partnerom',
    buttonOnClick: () => {
      router.push('/partners');
    },
  },
  {
    title: 'Jednorazový dar',
    description: 'Aj jednorazový príspevok dokáže veľa. Podporte nás bankovým prevodom alebo cez QR kód.',
    points: [
      'Podpora projektov a konferencií',
      'Pomoc pre mladých, ktorí chcú rásť',
      'Transparentné využitie darov',
    ],
    paragraph: 'IBAN: SK14 1100 0000 0029 4727 1726',
    buttonText: 'Požiadať potvrdenie',
    buttonOnClick: () => {
      window.location.href = 'mailto:info@mcslovakia.sk';
    },
  },
  {
    title: 'Pravidelná podpora',
    description: 'Malý príspevok každý mesiac = veľký rozdiel.',
    points: [
      'Umožňuje plánovať dlhodobo',
      'Podporujete konkrétnu misiu',
      'Dostanete pozvánky a novinky',
    ],
    paragraph: 'Chcete začať? Napíšte na info@mcslovakia.com IBAN: SK14 1100 0000 0029 4727 1726',
    buttonText: 'Napísať mail',
    buttonOnClick: () => {
      window.location.href = 'mailto:info@mcslovakia.sk';
    },
  },
];
</script>

<style>

</style>