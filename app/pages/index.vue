<template>
  <div class="bg-mcs-white">
    <!-- Hero -->
    <section
      class="bg-mcs-blue text-txt-white-prim relative overflow-visible
             h-[640px] xs:h-[700px] md:h-[1000px] lg:h-[800px] xl:h-[800px] 2xl:h-[800px]">
      <div class="mx-auto w-full max-w-[1180px] px-4 md:px-0 py-16 md:py-24">
        <div class="grid grid-cols-1 md:grid-cols-1 gap-10 items-start">
          <div class="space-y-6">
            <h1 class="merriweather text-4xl md:text-5xl text-txt-white-prim">
              {{ t('home.hero.title') }}
            </h1>
            <p class="text-[18px] text-txt-white-sec">
              {{ t('home.hero.desc') }}
            </p>
            <div class="flex flex-wrap gap-4">
              <ButtonPrim :text="t('home.hero.ctaVolunteer')" />
              <ButtonSec :text="t('home.hero.ctaPartner')" class="text-txt-white-prim"/>
            </div>
          </div>
          <!-- image starts under buttons, keeps its size, and overflows into white -->
          <div class="relative mt-6 md:mt-8 z-10">
            <div class="rounded">
              <img src="@/assets/images/hero.png" alt="Hero image" class="w-full h-auto object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About -->
    <!-- changed: add top padding to clear the overlapping hero image -->
    <section class="pt-24 md:pt-40 lg:pt-48">
      <div class="mx-auto w-full max-w-[1180px] px-4 md:px-0 py-16 md:py-24">
        <div class="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img :src="aboutImg" alt="About MCS" class="w-full h-[300px] md:h-[480px] object-cover object-center rounded" />
          </div>
          <div class="space-y-6">
            <h2 class="merriweather text-4xl text-txt-black-prim">{{ t('home.about.title') }}</h2>
            <p class="text-[18px] text-txt-black-sec">{{ t('home.about.desc') }}</p>
            <ButtonSec :text="t('home.about.cta')" />
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section>
      <div class="mx-auto w-full max-w-[1180px] px-4 md:px-0 py-16 md:py-24">
        <div class="flex items-center justify-between gap-5 flex-wrap mb-6">
          <h2 class="merriweather text-4xl text-txt-black-prim">{{ t('home.projects.title') }}</h2>
          <ButtonSec :text="t('home.projects.cta')" />
        </div>
        <div class="grid md:grid-cols-3 gap-5">
          <ProjectCard
            v-for="(p, idx) in projects"
            :key="p.title"
            :img="p.img"
            :title="p.title"
            :desc="p.desc"
            :date="p.date"
            :cta-text="p.cta"
          />
        </div>
      </div>
    </section>

    <!-- CTA Partner -->
    <section class="py-16 md:py-24">
      <div class="mx-auto w-full max-w-[1180px] px-4 md:px-0">
        <div class="relative bg-mcs-blue text-txt-white-prim rounded px-[50px] pt-[90px] pb-[100px] overflow-hidden">
          <div class="max-w-[680px] space-y-6">
            <h2 class="merriweather text-4xl">{{ t('home.partnerCta.title') }}</h2>
            <p class="text-[18px] text-txt-white-sec">{{ t('home.partnerCta.desc') }}</p>
            <div class="flex gap-4">
              <ButtonPrim :text="t('home.partnerCta.ctaSupport')" />
              <ButtonSec :text="t('home.partnerCta.ctaPartner')" class="text-txt-white-prim" />
            </div>
          </div>
          <img src="@/assets/images/support.png" alt="CTA Partner image" class="hidden md:block absolute right-8 top-8 w-[420px] h-[437px] object-cover rounded" />
        </div>
      </div>
    </section>

    <!-- Leadership -->
    <section>
      <div class="mx-auto w-full max-w-[1180px] px-4 md:px-0 py-16 md:py-24">
        <div class="flex items-center justify-between gap-5 flex-wrap mb-6">
          <h2 class="merriweather text-4xl text-txt-black-prim">{{ t('home.leadership.title') }}</h2>
          <ButtonSec :text="t('home.leadership.ctaMore')" />
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
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Articles -->
    <section>
      <div class="mx-auto w-full max-w-[1180px] px-4 md:px-0 py-16 md:py-24">
        <div class="flex items-center justify-between gap-5 flex-wrap mb-6">
          <h2 class="merriweather text-4xl text-txt-black-prim">{{ t('home.articles.title') }}</h2>
          <ButtonSec :text="t('home.articles.ctaMore')" />
        </div>
        <div class="grid md:grid-cols-3 gap-5">
          <ArticleCard
            v-for="a in articles"
            :key="a.title"
            :img="a.img"
            :title="a.title"
            :excerpt="a.excerpt"
            :author="a.author"
          />
        </div>
      </div>
    </section>

    <!-- Partners -->
    <section>
      <div class="mx-auto w-full max-w-[1180px] px-4 md:px-0 py-16 md:py-24">
        <div class="flex items-center justify-between gap-5 flex-wrap mb-6">
          <h2 class="merriweather text-4xl text-txt-black-prim">{{ t('home.partners.title') }}</h2>
          <ButtonSec :text="t('home.partners.ctaMore')" />
        </div>
        <div class="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-5">
          <div v-for="(p, i) in partners" :key="i" class="bg-mcs-grey rounded px-[30px] py-5 flex items-center justify-center">
            <img :src="p" alt="Partner logo" class="w-[60px] h-[60px] object-contain" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Volunteer -->
    <section class="py-16 md:py-24">
      <div class="mx-auto w-full max-w-[1180px] px-4 md:px-0">
        <div class="relative bg-mcs-blue text-txt-white-prim rounded px-[50px] pt-[90px] pb-[100px] overflow-hidden">
          <div class="max-w-[680px] space-y-6">
            <h2 class="merriweather text-4xl">{{ t('home.volunteerCta.title') }}</h2>
            <p class="text-[18px] text-txt-white-sec">{{ t('home.volunteerCta.desc') }}</p>
            <ButtonPrim :text="t('home.volunteerCta.ctaVolunteer')" />
          </div>
          <img :src="ctaVolunteerImg" alt="CTA Volunteer image" class="hidden md:block absolute right-8 top-8 w-[400px] h-[422px] object-cover rounded" />
        </div>
      </div>
    </section>

    <!-- Press mentions -->
    <section>
      <div class="mx-auto w-full max-w-[1180px] px-4 md:px-0 py-16 md:py-24">
        <h2 class="merriweather text-4xl text-txt-black-prim mb-6">{{ t('home.press.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-5">
          <article v-for="p in press" :key="p.source" class="bg-mcs-grey rounded p-5 space-y-4">
            <div class="flex items-center gap-4">
              <img :src="p.logo" :alt="p.source" class="w-[60px] h-[60px] object-cover rounded" />
              <div>
                <h3 class="text-[20px] font-semibold" :class="p.accent ? 'text-mcs-orange' : 'text-txt-black-prim'">{{ p.source }}</h3>
                <p class="text-[14px] text-txt-black-sec">{{ t('home.press.editorLabel') }}</p>
              </div>
            </div>
            <p class="text-[20px] text-txt-black-sec">{{ p.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Footer spacing placeholder; real footer is in layout/header components -->
  </div>
</template>

<script lang="ts" setup>
// @ts-nocheck
// Image assets are stored on a localhost server and referenced as constants.
// TODO: Replace placeholder URLs with real assets from the design server.
import pfpHolder from '@/assets/images/pfp_holder.png'

const heroImg = 'http://localhost:3845/assets/hero.png';
const aboutImg = 'http://localhost:3845/assets/about.png';
const projImg1 = 'http://localhost:3845/assets/project-1.png';
const projImg2 = 'http://localhost:3845/assets/project-2.png';
const projImg3 = 'http://localhost:3845/assets/project-3.png';
const ctaPartnerImg = 'http://localhost:3845/assets/cta-partner.png';
const ctaVolunteerImg = 'http://localhost:3845/assets/cta-volunteer.png';
const leaderImg1 = pfpHolder;
const leaderImg2 = pfpHolder;
const leaderImg3 = pfpHolder;
const leaderImg4 = pfpHolder;
const articleImg1 = 'http://localhost:3845/assets/article-1.png';
const articleImg2 = 'http://localhost:3845/assets/article-2.png';
const articleImg3 = 'http://localhost:3845/assets/article-3.png';
const partnerLogo = 'http://localhost:3845/assets/partner.png';
const pressLogo1 = 'http://localhost:3845/assets/press-1.png';
const pressLogo2 = 'http://localhost:3845/assets/press-2.png';
const pressLogo3 = 'http://localhost:3845/assets/press-3.png';

const { t } = useI18n()

// Explicit imports to avoid auto-registration mismatch during hydration

const leaders = [
  { name: 'Hana Huorková', role: 'Riaditeľka', img: leaderImg1 },
  { name: 'Tomáš Klein', role: 'Predseda Výkonnej rady', img: leaderImg2 },
  { name: 'Adam Dacho', role: 'Podpredseda Výkonnej rady', img: leaderImg3 },
  { name: 'Katarína Matejková', role: 'Revízorka', img: leaderImg4 },
  { name: 'Adam Pacho', role: 'Podpredseda Výkonnej rady', img: leaderImg3 },
  { name: 'Adam Bachol', role: 'Podpredseda Výkonnej rady', img: leaderImg3 },
  { name: 'Adam Rachol', role: 'Podpredseda Výkonnej rady', img: leaderImg3 },
  { name: 'Adam Vacho', role: 'Podpredseda Výkonnej rady', img: leaderImg3 },
]

const articles = [
  { title: 'Čo sa stane keď krajiny porušia medzinárodné právo?', excerpt: 'Každý štát má právny systém... ', author: 'Zoe Potocká', img: articleImg1, accent: false },
  { title: 'Diplomacia – je vôbec potrebná v modernom svete?', excerpt: 'Komunikácia je snáď najúčinnejším nástrojom...', author: 'Hana Dubeková', img: articleImg2, accent: true },
  { title: 'Je OSN stále dôležité? Akú úlohu zohráva dnes?', excerpt: 'Organizácia Spojených národov (OSN)...', author: 'Sophia Anna Hozlárová', img: articleImg3, accent: false },
]

const partners = Array.from({ length: 8 }).map(() => partnerLogo)

const press = [
  { source: 'Startitup', logo: pressLogo1, text: 'Model Conferences Slovakia (MCS) nie je len ďalšia neziskovka...', accent: false },
  { source: 'Denník N', logo: pressLogo2, text: 'MCS ponúka študentom reálnu skúsenosť s rozhodovaním...', accent: true },
  { source: 'Aktuality.sk', logo: pressLogo3, text: 'Model Conferences Slovakia organizuje konferencie...', accent: false },
]

const projects = [
  {
    img: projImg1,
    title: 'NATOBA 2026',
    desc: t('home.projects.sampleDesc1'),
    date: 'Jún 2026',
    cta: t('home.projects.ctaJoin'),
  },
  {
    img: projImg2,
    title: 'MUN 2025',
    desc: t('home.projects.sampleDesc2'),
    date: 'November 2025',
    cta: t('home.projects.ctaJoin'),
  },
  {
    img: projImg3,
    title: 'MUN 2026',
    desc: t('home.projects.sampleDesc3'),
    date: 'Apríl 2026',
    cta: t('home.projects.ctaJoin'),
  },
]

useHead({
  // TODO: refine SEO title/description
  title: t('home.seo.title') || 'Model Conferences Slovakia — Homepage',
  meta: [
    { name: 'description', content: t('home.seo.description') || 'MCS — modelové konferencie pre budúcich lídrov. TODO: edit.' },
  ],
})
</script>

<style scoped>
/* Utilities used: Tailwind. Using plain <img> with object-cover per request. */
</style>