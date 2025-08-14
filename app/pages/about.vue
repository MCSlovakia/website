<template>
  <div class="flex lg:mx-auto mx-5 justify-center">
    <div class="flex flex-col md:gap-6 sm:gap-5 gap-4 md:mt-[90px] mt-[50px] xl:w-[1180px] lg:w-[940px] w-full">
      <h1 class="md:text-5xl sm:text-3xl text-2xl">Študenti, ktorí formujú budúcnosť dialógom</h1>
      <div class="flex gap-5 justify-between lg:flex-row flex-col ">
        <p class="text-txt-black-sec md:text-[18px] text-base xl:w-[700px] lg:w-[500px] w-full">
          Sme komunita mladých lídrov, ktorí cez simulácie medzinárodných inštitúcií rozvíjajú diplomaciu, kritické myslenie a odvahu viesť, pričom spájame študentov z celého Slovenska, aby spolu riešili globálne výzvy už dnes.
        </p>
        <div class="flex gap-5 items-start">
          <ButtonPrim
              class="inline"
              text="Pripojiť sa k tímu"
              @click="() => router.push('/partners')"
          />
          <ButtonSec
              class="text-txt-black-prim inline"
              text="Podporiť projekt"
              @click="() => router.push('/support-us')"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-center lg:mx-auto mx-5 sm:mt-7 mt-5">
    <div class="xl:w-[1180px] lg:w-[940px] w-full">
      <NuxtImg
          src="/components/about/hero.jpg"
          width="1180"
          height="700"
          class="w-full h-auto object-cover"
          alt="Hero Image"
      />
    </div>
  </div>

  <div class="flex lg:mx-auto mx-5 justify-center">
    <div class="flex flex-col md:gap-6 gap-5 md:mt-[90px] mt-[50px] xl:w-[1180px] lg:w-[940px] w-full">
      <h2 class="md:text-[40px] text-3xl">Ako to funguje</h2>
      <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-4">
        <Card
            v-for="(item, idx) in WorkContent"
            :key="idx"
            :title="item.title"
            :description="item.description"
        />
      </div>
    </div>
  </div>

  <div class="flex lg:px-auto px-5 justify-center bg-mcs-blue md:mt-[90px] mt-[50px] ">
    <div class="flex flex-col md:gap-6 gap-5 md:pt-[90px] md:pb-[100px] pt-[50px] pb-[60px] xl:w-[1180px] lg:w-[940px] w-full">
      <h2 class="md:text-[40px] text-3xl text-txt-white-prim">Naše hodnoty</h2>
      <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-4">
        <Card
            v-for="(item, idx) in ValuesContent"
            :key="idx"
            :icon="item.icon"
            :title="item.title"
            :description="item.description"
        />
      </div>
    </div>
  </div>

  <div class="flex lg:px-auto px-5 justify-center md:mt-[90px] mt-[50px]">
    <div class="flex flex-col md:gap-6 gap-5 xl:w-[1180px] lg:w-[940px] w-full">
      <h2 class="md:text-[40px] text-3xl">Zakladatelia</h2>
      <div class="grid lg:grid-cols-2 grid-cols-1 md:gap-5 gap-4">
        <FounderCard
            v-for="(item, idx) in founders"
            :key="idx"
            :img="item.img"
            :name="item.name"
            :description="item.description"
            :instagram="item.instagram"
            :linkedin="item.linkedin"
            :email="item.email"
        />
      </div>
    </div>
  </div>

  <div class="flex lg:px-auto px-5 justify-center md:mt-[90px] mt-[50px]">
    <div class="flex flex-col md:gap-6 gap-5 xl:w-[1180px] lg:w-[940px] w-full">
      <h2 class="md:text-[40px] text-3xl">Vedenie</h2>
      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-4">
        <LeaderCard
            v-for="(item, idx) in leaders"
            :key="idx"
            :img="item.img"
            :name="item.name"
            :role="item.role"
            :instagram="item.instagram"
            :linkedin="item.linkedin"
        />
      </div>
    </div>
  </div>

  <JoinUs />

</template>

<script setup lang="ts">
import JoinUs from "~/components/joinUs.vue";
import ButtonPrim from "~/components/buttonPrim.vue";
import ButtonSec from "~/components/buttonSec.vue";
import { useRouter } from 'vue-router';
import Card from "~/components/card.vue";
import FounderCard from "~/components/leaders/founderCard.vue";
import LeaderCard from "~/components/leaders/leaderCard.vue";
const router = useRouter();

const WorkContent = [
  {
    title: 'Spravná rada',
    description: 'Správna rada je najvyšší orgán MCS. Tvorí ju trojica členov vrátane predsedu. Rieši právne záležitosti, schvaľuje účtovníctvo, výročnú správu, zmeny v štatúte a dohliada na rozvoj organizácie.',
  },
  {
    title: 'Výkonná rada',
    description: 'Výkonná rada má päť členov a dohliada na riaditeľa, smerovanie MCS a plánovanie aktivít. Vydáva nariadenia a upravuje interné pravidlá.',
  },
  {
    title: 'Riaditeľ',
    description: 'Riaditeľ vedie každodennú činnosť MCS, koordinuje projekty a zastupuje organizáciu navonok.',
  },
  {
    title: 'Revízor',
    description: 'Revízor dohliada na finančnú a administratívnu správnosť fungovania MCS.',
  },
  {
    title: 'Vedúci sekcií',
    description: 'Vedúci sekcií (päť členov) zabezpečujú kľúčové oblasti prípravy a realizácie projektov MCS.',
  },
  {
    title: 'Dobrovoľnici',
    description: 'Dobrovoľnícky tím tvorí 40 mladých nadšencov, ktorí organizujú podujatia a šíria povedomie o diplomacii medzi mládežou doma aj v zahraničí.',
  },
];

const ValuesContent = [
  {
    icon: new URL('/assets/icons/about/critical-thinking.svg', import.meta.url).href,
    title: 'Kritické myslenie a argumentácia',
    description: 'MCS podporuje rozvoj analytického a logického myslenia, ako aj schopnosti formulovať a obhajovať vlastné názory.',
  },
  {
    icon: new URL('/assets/icons/about/active-citizen.svg', import.meta.url).href,
    title: 'Aktívne občianstvo a angažovanosť',
    description: 'Cieľom je pripraviť mladých ľudí na aktívnu účasť v spoločnosti a motivovať ich, aby sa podieľali na riešení spoločenských a globálnych problémov.',
  },
  {
    icon: new URL('/assets/icons/about/yapsesh.svg', import.meta.url).href,
    title: 'Dialóg a porozumenie',
    description: 'MCS verí v silu aktívneho a rešpektujúceho dialógu ako nástroja na vytváranie konsenzu medzi rôznymi názormi a záujmami.',
  },
  {
    icon: new URL('/assets/icons/about/self-grow.svg', import.meta.url).href,
    title: 'Osobnostný rast a sebavyjadrenie',
    description: 'Organizácia vytvára bezpečný priestor pre rozvoj sebavedomia, schopnosti vyjadriť sa a prezentovať vlastné názory bez strachu.',
  },
  {
    icon: new URL('/assets/icons/about/global-challenge.svg', import.meta.url).href,
    title: 'Vzdelávanie o globálnych výzvach',
    description: 'Dôležitou hodnotou je zvyšovanie povedomia o medzinárodných vzťahoch, diplomacii a výzvach dnešného sveta.',
  },
  {
    icon: new URL('/assets/icons/about/be-creative.svg', import.meta.url).href,
    title: 'Tvorivosť a hľadanie riešení',
    description: 'MCS podporuje mladých ľudí v tom, aby boli proaktívni, hľadali inovatívne a konštruktívne riešenia problémov, ktoré svet trápi.',
  },
];

const founders = [
  {
    img: '/components/leaders/adam.jpg',
    name: 'Adam Dacho',
    description: 'Adam (16) študuje na bilingválnom Gymnáziu Jura Hronca. Vyrastal na Taiwane a v Moldavsku, čo formovalo jeho záujem o diplomaciu. Aktívne sa venuje MUN, MEP, debatám a moot courtom. Založením tejto iniciatívy chce pomôcť študentom rozvíjať kritické myslenie a záujem o medzinárodné dianie.',
    instagram: 'tomas_klein',
    linkedin: 'tomas-klein-1a4b6b1a2',
    email: 'adam@mcslovakia.sk',
  },
  {
    img: '/components/leaders/hanka.jpg',
    name: 'Hana Huorková',
    description: 'Hanka je maturantka na ŠpMNDaG, čoskoro odchádza študovať medzinárodné právo do Amsterdamu. Zúčastnila sa desiatok modelových konferencií, ktoré aj organizovala. Je v DofE a pracuje s mládežou. V MCS chce sprístupniť tieto skúsenosti ďalším a podporiť vzdelávanie v diplomacii.',
    instagram: 'hanahuorkova',
    linkedin: 'hana-huorkova',
    email: 'hana@mcslovakia.sk',
  },
];

const leaders = [
  {
    img: '/components/leaders/hanka.jpg',
    name: 'Hana Huorková',
    role: 'Riaditeľka',
    instagram: 'hanahuorkova',
    linkedin: 'hana-huorkova',
  },
  {
    img: '/components/leaders/tomas.jpg',
    name: 'Tomáš Klein',
    role: 'Predseda Výkonnej rady',
    instagram: 'tomas_klein',
    linkedin: 'tomas-klein-1a4b6b1a2',
  },
  {
    img: '/components/leaders/adam.jpg',
    name: 'Adam Dacho',
    role: 'Podpredseda Výkonnej rady',
    instagram: 'adam_dacho',
    linkedin: 'adam-dacho-1a4b6b1a2',
  },
  {
    img: '/components/leaders/goran.jpg',
    name: 'Goran Dacho',
    role: 'Člen Výkonnej rady',
    instagram: 'goran_dacho',
    linkedin: 'goran-dacho-1a4b6b1a2',
  },
  {
    img: '/components/leaders/kika.jpg',
    name: 'Katarína Matejková',
    role: 'Revízorka',
    instagram: 'katarina_matejkova',
    linkedin: 'katarina-matejkova-1a4b6b1',
  },
  {
    img: '/components/leaders/oliver.jpg',
    name: 'Oliver Gajarský',
    role: 'Člen Správnej rady',
    instagram: 'oliver_gajarsky',
    linkedin: 'oliver-gajarsky-1a4b6b1a',
  },
  {
    img: '/components/leaders/holder.png',
    name: 'Anna Kleinová',
    role: 'Predsedkyňa Správnej rady',
    instagram: 'anna_kleinova',
    linkedin: 'anna-kleinova-1a4b6b1a2',
  },
  {
    img: '/components/leaders/holder.png',
    name: 'Tomáš Klein st.',
    role: 'Člen Správnej rady',
    instagram: 'tomas_klein_st',
    linkedin: 'tomas-klein-st-1a4b6b1a2',
  },
  {
    img: '/components/leaders/holder.png',
    name: 'Lucia Šimková',
    role: 'Marketingová manažérka',
    instagram: 'lucia_simkova',
    linkedin: 'lucia-simkova-1a4b6b1a',
  },
]

</script>