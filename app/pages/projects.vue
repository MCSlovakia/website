<template>
  <div class="flex lg:mx-auto mx-5 justify-center">
    <div class="flex flex-col md:gap-6 sm:gap-5 gap-4 md:mt-[90px] mt-[50px] xl:w-[1180px] lg:w-[940px] w-full">
      <h1 class="md:text-5xl sm:text-3xl text-2xl">Projekty</h1>
      <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-4">
        <ProjectCard
            v-for="(project, index) in pagedProjects"
            :key="index"
            :img="project.img"
            :title="project.title"
            :description="project.desc"
            :date="project.date"
            :link="'/projects/' + project.title.toLowerCase().replace(/ /g, '-')"
        />
      </div>
      <div class="flex gap-2 justify-center mt-6" v-if="pageCount > 1">
        <ButtonSec
            class="text-txt-black-prim"
            icon="ri-arrow-left-s-line"
            :disabled="currentPage.valueOf() === 1"
            :onClick="() => goToPage(currentPage.valueOf() - 1)"
        />
        <ButtonSec
            v-for="page in pageCount"
            :key="page"
            :text="String(page)"
            :active="page === currentPage.valueOf()"
            :onClick="() => goToPage(page)"
        />
        <ButtonSec
            class="text-txt-black-prim"
            icon="ri-arrow-right-s-line"
            :disabled="currentPage.valueOf() === pageCount.valueOf()"
            :onClick="() => goToPage(currentPage.valueOf() + 1)"
        />
      </div>
    </div>
  </div>

  <JoinUs />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import JoinUs from "~/components/joinUs.vue";
import ProjectCard from "~/components/project/projectCard.vue";
import ButtonSec from '~/components/buttonSec.vue';

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const pageSize = 18
const currentPage = ref(1)
const pageCount = computed(() => Math.ceil(projects.length / pageSize))

const pagedProjects = computed(() =>
    projects.slice((currentPage.value - 1) * pageSize, currentPage.value * pageSize)
)

function goToPage(page: number) {
  if (page >= 1 && page <= pageCount.value) {
    currentPage.value = page
  }
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

</script>