<template>
  <div class="flex lg:px-auto px-5 justify-center bg-mcs-blue max-h-screen overflow-visible">
    <div class="flex flex-col md:gap-6 gap-5 xl:w-[1180px] lg:w-[940px] w-full">
      <div class="flex flex-col gap-4 mt-12">
        <h1 class="md:text-5xl sm:text-3xl text-2xl text-txt-white-prim">
          {{ t('home.hero.title') }}
        </h1>
        <div class="flex lg:flex-row flex-col items-start gap-4 md:gap-6">
          <p class="text-txt-white-sec md:text-[18px] text-base xl:w-[700px] lg:w-[460px]">
            {{ t('home.hero.desc') }}
          </p>
          <div class="flex sm:flex-row flex-col items-start gap-4">
            <ButtonPrim
                :text="t('home.hero.ctaVolunteer')"
                :onClick="openVolunteerForm"
            />
            <ButtonSec
                class="text-txt-white-prim"
                :text="t('home.hero.ctaPartner')"
                :onClick="() => router.push(localePath('/partners'))"
            />
          </div>
        </div>
      </div>
      <NuxtImg
          class="mt-4 md:mt-4 z-10 w-full md:h-[700px] sm:h-[400px] h-[300px] object-cover object-center rounded"
          src="/components/main/hero.png"
          alt="Background image"
          width="100%"
          height="100%"
          loading="lazy"
      />
    </div>
  </div>

  <div class="flex lg:px-auto px-5 justify-center xl:mt-[340px] lg:mt-[240px] md:mt-[160px] sm:mt[220px] mt-[100px]">
    <div class="flex flex-col md:gap-6 gap-5 xl:w-[1180px] lg:w-[940px] w-full">
      <div class="flex lg:flex-row flex-col items-center justify-between gap-10">
        <NuxtImg
            class="lg:w-[480px] lg:h-[480px] w-auto h-320 object-cover rounded"
            src="/components/main/about.jpg"
            alt="About Model Conferences Slovakia"
            width="100%"
            height="100%"
            loading="lazy"
        />
        <div class="flex flex-col gap-6 items-start">
          <h2 class="md:text-[40px] text-3xl">{{ t('home.about.title') }}</h2>
          <p class="text-[18px] text-txt-black-sec">{{ t('home.about.desc') }}</p>
          <ButtonSec
              :text="t('home.about.cta')"
              :onClick="() => router.push(localePath('/about'))"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="flex lg:px-auto px-5 justify-center md:mt-[90px] mt-[50px]">
    <div class="flex flex-col md:gap-6 gap-5 xl:w-[1180px] lg:w-[940px] w-full">
      <div class="flex items-center justify-between gap-5 flex-wrap">
        <h2 class="md:text-[40px] text-3xl">{{ t('home.projects.title') }}</h2>
        <ButtonSec
            :text="t('home.projects.cta')"
            :onClick="() => router.push(localePath('/projects'))"
        />
      </div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 gap-4">
        <ProjectCard
            v-for="(p, idx) in projects"
            :key="idx"
            :img="p.img"
            :title="p.title"
            :description="p.desc"
            :date="p.date"
            :link="'/project-details/' + idx"
        />
      </div>
    </div>
  </div> -->

  <PartnerCta />

  <div class="flex lg:px-auto px-5 justify-center md:mt-[90px] mt-[50px]">
    <div class="flex flex-col md:gap-6 gap-5 xl:w-[1180px] lg:w-[940px] w-full">
      <div class="flex items-center justify-between gap-5 flex-wrap">
        <h2 class="md:text-[40px] text-3xl">{{ t('home.leadership.title') }}</h2>
        <ButtonSec
            :text="t('home.leadership.ctaMore')"
            :onClick="() => router.push(localePath('/about'))"
        />
      </div>
      <div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div
            v-for="(m, i) in leaders"
            :key="m.name"
            :class="[
              i >= 8 ? 'hidden' : '',
              i >= 6 && i < 8 ? 'hidden lg:block' : '',
              i >= 3 && i < 6 ? 'hidden xs:block' : ''
            ]"
        >
          <LeaderCard
              :img="m.img"
              :name="m.name"
              :role="m.role"
              :instagram="m.instagram"
              :linkedin="m.linkedin"
          />
        </div>
      </div>
    </div>
  </div>

  <div v-if="articlesData.length > 0" class="flex lg:px-auto px-5 justify-center md:mt-[90px] mt-[50px]">
    <div class="flex flex-col md:gap-6 gap-5 xl:w-[1180px] lg:w-[940px] w-full">
      <div class="flex items-center justify-between gap-5 flex-wrap">
        <h2 class="md:text-[40px] text-3xl">{{ t('home.articles.title') }}</h2>
        <ButtonSec
            :text="t('home.articles.ctaMore')"
            :onClick="() => router.push(localePath('/articles'))"
        />
      </div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 gap-4">
        <ArticleCard
            v-for="(a, idx) in articlesData"
            :key="idx"
            :img="a.image ?? undefined"
            :title="a.title"
            :excerpt="a.excerpt"
            :author="(a.authors && a.authors.join(', ')) || a.author"
            :to="localePath({ name: 'articles-slug', params: { slug: a.slug } })"
        />
      </div>
    </div>
  </div>

  <LazyJoinUs />

  <div class="flex lg:px-auto px-5 justify-center md:mt-[90px] mt-[50px]">
    <div class="flex flex-col md:gap-6 gap-5 xl:w-[1180px] lg:w-[940px] w-full">
      <div class="flex items-center justify-between gap-5 flex-wrap mb-6">
        <h2 class="md:text-[40px] text-3xl">{{ t('home.partners.title') }}</h2>
        <ButtonSec
            :text="t('home.partners.ctaMore')"
            :onClick="() => router.push(localePath('/partners'))"
        />
      </div>
      <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-4">
        <PartnerCard
            v-for="(p, idx) in partnersContent"
            :key="idx"
            :logo="p"
        />
      </div>
    </div>
  </div>

  <!-- <div class="flex lg:px-auto px-5 justify-center md:mt-[90px] mt-[50px]">
    <div class="flex flex-col md:gap-6 gap-5 xl:w-[1180px] lg:w-[940px] w-full">
      <h2 class="md:text-[40px] text-3xl">{{ t('home.press.title') }}</h2>
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-5">
        <PressMentionCard
            v-for="(p, idx) in pressMensionContent"
            :key="idx"
            :logo="p.logo"
            :title="p.title"
            :author="p.author"
            :description="p.description"
        />
      </div>
    </div>
  </div> -->

  <CtaBig
    :title="t('home.volunteerCta.ctaVolunteer2')"
    :description="t('home.volunteerCta.desc2')"
    :buttonText="t('home.volunteerCta.ctaVolunteer')"
    buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSeuE7h_LyGQ2KK1ncA2_blFCcS6-8uP8vbBEs8hdy4Tkdg5OQ/viewform"
  />

</template>

<script lang="ts" setup>
import ProjectCard from "@/components/project/projectCard.vue";
import PartnerCta from "@/components/partnerCta.vue";
import LeaderCard from "@/components/leaders/leaderCard.vue";
import ArticleCard from "@/components/articles/articleCard.vue";
import JoinUs from "@/components/joinUs.vue";
import PartnerCard from "@/components/partners/partnerCard.vue";
import PressMentionCard from '@/components/main/pressMentionCard.vue';
import CtaBig from "@/components/ctaBig.vue";

import {useRouter} from "vue-router";
import { computed } from 'vue';
const router = useRouter();
const localePath = useLocalePath();

import {useI18n} from "#imports";
const { t, locale } = useI18n()

// Import article data from JSON files
import skArticles from '~/data/articles/sk.json';
import enArticles from '~/data/articles/en.json';

type Article = {
  title: string;
  slug?: string;
  date?: string;
  author?: string;
  authors?: string[];
  image?: string | null;
  heroImage?: string | null;
  excerpt?: string;
  body?: string;
};

const allArticles = computed<Record<string, Article[]>>(() => ({
  sk: skArticles as unknown as Article[],
  en: enArticles as unknown as Article[],
}));

const articlesData = computed<Article[]>(() => {
  const lang = locale.value === 'en' ? 'en' : 'sk';
  const articles = allArticles.value[lang] ?? [];
  // Return the 3 most recent articles
  return [...articles]
    .sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 3);
});

function openVolunteerForm() {
  window.open('https://docs.google.com/forms/d/e/1FAIpQLSeuE7h_LyGQ2KK1ncA2_blFCcS6-8uP8vbBEs8hdy4Tkdg5OQ/viewform', '_blank');
}



const projects = [
  {
    img: "",
    title: 'NATOBA 2026',
    desc: t('home.projects.sampleDesc1'),
    date: 'Jún 2026',
    cta: t('home.projects.ctaJoin'),
  },
  {
    img: "",
    title: 'MUN 2025',
    desc: t('home.projects.sampleDesc2'),
    date: 'November 2025',
    cta: t('home.projects.ctaJoin'),
  },
  {
    img: "",
    title: 'MUN 2026',
    desc: t('home.projects.sampleDesc3'),
    date: 'Apríl 2026',
    cta: t('home.projects.ctaJoin'),
  },
]
// test
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
]



import partnerYubico from '~/assets/partners/partner=yubico.png'
import partnerDofe from '~/assets/partners/partner=dofe.png'

const partnersContent = [
  partnerYubico,
  partnerDofe
]

const pressMensionContent = [
  {
    logo: 'https://example.com/logo1.png',
    title: 'Startitup',
    author: "Redakcia",
    description: "Model Conferences Slovakia (MCS) nie je len ďalšia neziskovka. Je to komunita mladých, ktorí chcú aktívne formovať svet. Organizujú simulácie NATO či OSN a rozvíjajú u študentov schopnosti, ktoré využijú ako budúci lídri. Stoja na ambícii, inovácii a odhodlaní zanechať skutočný dopad."
  },
  {
    logo: 'https://example.com/logo2.png',
    title: 'Denník N',
    author: "Redakcia",
    description: "MCS ponúka študentom reálnu skúsenosť s rozhodovaním v diplomacii. Na summite NATOBA si mladí osvojujú strategické myslenie, empatiu aj schopnosť viesť dialóg. Cieľom je pripraviť ich na situácie, kde budú musieť niesť zodpovednosť a hľadať riešenia v zložitých globálnych výzvach.",
  },
  {
    logo: 'https://example.com/logo3.png',
    title: 'Aktuality.sk',
    author: "Redakcia",
    description: 'Model Conferences Slovakia organizuje konferencie, kde si mladí vyskúšajú úlohu diplomatov. Projekt NATOBA každý rok priláka desiatky študentov, ktorí simulujú reálne rokovania a riešia aktuálne výzvy. MCS im pomáha rozvíjať zručnosti dôležité pre kariéru aj život.',
  },
]

useHead({
  title: t('home.seo.title') || 'Model Conferences Slovakia — Homepage',
  meta: [
    { name: 'description', content: t('home.seo.description') || 'MCS — modelové konferencie pre budúcich lídrov. TODO: edit.' },
  ],
})
</script>