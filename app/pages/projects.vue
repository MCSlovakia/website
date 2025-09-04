<template>
  <div class="flex justify-center">
    <div class="flex flex-col md:gap-6 sm:gap-5 gap-4 md:mt-[90px] mt-[50px] w-full max-w-[1180px] px-5 mx-auto">
  <h1 class="md:text-5xl sm:text-3xl text-2xl">{{ t('projectsPage.title') }}</h1>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 gap-4">
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
  <div class="flex gap-2 justify-center md:justify-end mt-6" v-if="pageCount > 1">
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

import { useI18n } from '#imports';
const { t } = useI18n();

// show 6 cards per page so we can render 3x2 (>=1024), 2x3 (>=768) and 1x6 (<768)
const pageSize = 6
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
]

</script>