<template>
  <div class="flex lg:mx-auto mx-5 justify-center">
    <div class="flex flex-col md:gap-6 sm:gap-5 gap-4 md:mt-[90px] mt-[50px] xl:w-[1180px] lg:w-[940px] w-full">
  <h1 class="md:text-5xl sm:text-3xl text-2xl">{{ t('about.hero.title') }}</h1>
      <div class="flex gap-5 justify-between lg:flex-row flex-col ">
        <p class="text-txt-black-sec md:text-[18px] text-base xl:w-[700px] lg:w-[500px] w-full">
          {{ t('about.hero.desc') }}
        </p>
        <div class="flex gap-5 items-start">
      <ButtonPrim
        class="inline"
        :text="t('about.hero.ctaJoinTeam')"
        :onClick="openVolunteerForm"
      />
      <ButtonSec
        class="text-txt-black-prim inline"
        :text="t('about.hero.ctaSupportProject')"
        @click="() => router.push(localePath('/support-us'))"
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
  <h2 class="md:text-[40px] text-3xl">{{ t('about.structure.title') }}</h2>
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
  <h2 class="md:text-[40px] text-3xl text-txt-white-prim">{{ t('about.values.title') }}</h2>
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
  <h2 class="md:text-[40px] text-3xl">{{ t('about.founders.title') }}</h2>
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
  <h2 class="md:text-[40px] text-3xl">{{ t('about.leadership.title') }}</h2>
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
import { useI18n } from '#imports';

const router = useRouter();
const localePath = useLocalePath();
const { t } = useI18n();


function openVolunteerForm() {
  window.open('https://docs.google.com/forms/d/e/1FAIpQLSeuE7h_LyGQ2KK1ncA2_blFCcS6-8uP8vbBEs8hdy4Tkdg5OQ/viewform', '_blank');
}
const WorkContent = [
  {
    title: t('about.structure.items.board.title'),
    description: t('about.structure.items.board.desc'),
  },
  {
    title: t('about.structure.items.executiveBoard.title'),
    description: t('about.structure.items.executiveBoard.desc'),
  },
  {
    title: t('about.structure.items.director.title'),
    description: t('about.structure.items.director.desc'),
  },
  {
    title: t('about.structure.items.auditor.title'),
    description: t('about.structure.items.auditor.desc'),
  },
  {
    title: t('about.structure.items.sectionLeaders.title'),
    description: t('about.structure.items.sectionLeaders.desc'),
  },
  {
    title: t('about.structure.items.volunteers.title'),
    description: t('about.structure.items.volunteers.desc'),
  },
];

import aboutCriticalThinking from '~/assets/icons/about/critical-thinking.svg'
import aboutActiveCitizen from '~/assets/icons/about/active-citizen.svg'
import aboutYapsesh from '~/assets/icons/about/yapsesh.svg'
import aboutSelfGrow from '~/assets/icons/about/self-grow.svg'
import aboutGlobalChallenge from '~/assets/icons/about/global-challenge.svg'
import aboutBeCreative from '~/assets/icons/about/be-creative.svg'

const ValuesContent = [
  {
    icon: aboutCriticalThinking,
    title: t('about.values.items.criticalThinking.title'),
    description: t('about.values.items.criticalThinking.desc'),
  },
  {
    icon: aboutActiveCitizen,
    title: t('about.values.items.activeCitizenship.title'),
    description: t('about.values.items.activeCitizenship.desc'),
  },
  {
    icon: aboutYapsesh,
    title: t('about.values.items.dialogueUnderstanding.title'),
    description: t('about.values.items.dialogueUnderstanding.desc'),
  },
  {
    icon: aboutSelfGrow,
    title: t('about.values.items.personalGrowth.title'),
    description: t('about.values.items.personalGrowth.desc'),
  },
  {
    icon: aboutGlobalChallenge,
    title: t('about.values.items.globalChallengesEducation.title'),
    description: t('about.values.items.globalChallengesEducation.desc'),
  },
  {
    icon: aboutBeCreative,
    title: t('about.values.items.creativitySolutions.title'),
    description: t('about.values.items.creativitySolutions.desc'),
  },
];

const founders = [
  {
    img: '/components/leaders/adam.jpg',
    name: 'Adam Dacho',
    description: t('about.founders.items.adam.desc'),
    instagram: 'adam.d.007',
    linkedin: 'adam-d-4b98b6290',
    email: 'adam@mcslovakia.com',
  },
  {
    img: '/components/leaders/hanka.jpg',
    name: 'Hana Huorková',
    description: t('about.founders.items.hana.desc'),
    instagram: 'huorkovaa_',
    linkedin: 'hana-huorková-3aa7602a8',
    email: 'hana@mcslovakia.com',
  },
];

const leaders = [
  {
    img: '/components/leaders/hanka.jpg',
    name: 'Hana Huorková',
    role: t('roles.directorFemale'),
    instagram: 'huorkovaa_',
    linkedin: 'hana-huorková-3aa7602a8',
  },
  {
    img: '/components/leaders/tomas.JPG',
    name: 'Tomáš Klein',
    role: t('roles.executiveBoardChair'),
    instagram: 'tkmk08',
    linkedin: '',
  },
  {
    img: '/components/leaders/adam.jpg',
    name: 'Adam Dacho',
    role: t('roles.executiveBoardViceChair'),
    instagram: 'adam.d.007',
    linkedin: 'adam-d-4b98b6290',
  },
  {
    img: '/components/leaders/matilda.png',
    name: 'Matilda Dittelová',
    role: t('roles.executiveBoardMember'),
    instagram: 'matildaa_dittelova_',
    linkedin: '',
  },
  {
    img: '/components/leaders/katka.png',
    name: 'Katarína Matejková',
    role: t('roles.auditorFemale'),
    instagram: '_matejkovie_',
    linkedin: '',
  },
  {
    img: '/components/leaders/oliver.JPG',
    name: 'Oliver Gajarský',
    role: t('roles.boardMemberSenior'),
    instagram: 'mrozik_1999',
    linkedin: 'oliver-gajarský-996425370',
  },
  {
    img: '/components/leaders/kleinova.png',
    name: 'Anna Kleinová',
    role: t('roles.boardChairFemale'),
    instagram: 'anna_kleinova',
    linkedin: '',
  },
  {
    img: '/components/leaders/kleins.png',
    name: 'Tomáš Klein st.',
    role: t('roles.boardMemberSenior'),
    instagram: 'tomas_klein_st',
    linkedin: '',
  },
  {
    img: '/components/leaders/spisakova.png',
    name: 'Daniela Spišáková',
    role: t('roles.organizationalTeamLeader'),
    instagram: 'danielaa_s_',
    linkedin: 'daniela-spišáková-6a3362299',
  },
  {
    img: '/components/leaders/vaculova.png',
    name: 'Lillien Vaculová',
    role: t('roles.organizationalTeamDeputy'),
    instagram: 'vaculova_lillien',
    linkedin: '',
  },
  {
    img: '/components/leaders/cannecka.png',
    name: 'Emma Čanecká',
    role: t('roles.hrLeader'),
    instagram: 'emma.canecka',
    linkedin: 'emma-čanecká-459943373',
  },
  {
    img: '/components/leaders/durica.png',
    name: 'Sebastián Ďurica',
    role: t('roles.hrDeputy'),
    instagram: 'sibo.cc',
    linkedin: 'sebastian-durica-91b32829a',
  },
  {
    img: '/components/leaders/holder.png',
    name: 'Lívia Lilly Mrugová',
    role: t('roles.marketingLeader'),
    instagram: 'lilly.mrugova',
    linkedin: '',
  },
  {
    img: '/components/leaders/holder.png',
    name: 'Filip Križanský',
    role: t('roles.marketingDeputy'),
    instagram: 'f.krizansky',
    linkedin: '',
  },
  {
    img: '/components/leaders/droscinova.png',
    name: 'Nikola Droščínová',
    role: t('roles.marketingContentCreationLeader'),
    instagram: 'nikinka08',
    linkedin: '',
  },
  {
    img: '/components/leaders/holder.png',
    name: 'Ivana Časnochová',
    role: t('roles.spokesperson'),
    instagram: 'casnochovaxx',
    linkedin: '',
  },
  {
    img: '/components/leaders/bednar.png',
    name: 'Adrian Bednár',
    role: t('roles.accountingLeader'),
    instagram: 'adr.bed',
    linkedin: 'adrian-bednar',
  },
  {
    img: '/components/leaders/holder.png',
    name: 'Emma Kornélia Petrufová',
    role: t('roles.accountingDeputy'),
    instagram: 'epetruf',
    linkedin: '',
  },
  {
    img: '/components/leaders/holder.png',
    name: 'Zoe Potocká',
    role: t('roles.contentWritersLeader'),
    instagram: 'zoepotocka',
    linkedin: '',
  },
  {
    img: '/components/leaders/holder.png',
    name: 'Sophia Anna Hozlárová',
    role: t('roles.contentWritersDeputy'),
    instagram: 'hozlarova_s',
    linkedin: '',
  },
  {
    img: '/components/leaders/senkyr.png',
    name: 'Martin Šenkýř',
    role: t('roles.itLeader'),
    instagram: 'martin.senkyr',
    linkedin: 'martin-šenkýř-334141335',
  },
  {
    img: '/components/leaders/balabolkin.png',
    name: 'Peter Balabolkin',
    role: t('roles.itDeputy'),
    instagram: 'tot_samy_technopetya',
    linkedin: 'pbalabolkin',
  },
  {
    img: '/components/leaders/holder.png',
    name: 'Martin Gašperec',
    role: t('roles.generalMarketing'),
    instagram: '_martingasperec_',
    linkedin: '',
  },
]                                                                                                                                                                 

</script>