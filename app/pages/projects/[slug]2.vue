<template>
  <div class="flex lg:mx-auto mx-5 justify-center">
    <div class="flex flex-col md:gap-10 gap-6 md:mt-[90px] mt-[50px] xl:w-[1180px] lg:w-[940px] w-full">
      <div v-if="project">
        <!-- Title & meta -->
        <h1 class="md:text-5xl sm:text-3xl text-2xl font-semibold mb-2">{{ project.title }}</h1>
        <p class="text-sm text-txt-black-sec mb-6">
          <span v-if="formattedDate">{{ formattedDate }}</span>
        </p>

        <!-- Hero image -->
        <NuxtImg
          v-if="project.heroImage"
          :src="project.heroImage"
          alt="Project hero image"
          class="w-full md:h-[420px] h-[260px] object-cover rounded mb-10"
        />

        <!-- Body -->
        <article class="prose prose-lg max-w-none">
          <div v-html="project.body" />
        </article>
      </div>

      <div v-else>
        <p>Project not found.</p>
      </div>

      <!-- Related projects -->
      <section v-if="relatedProjects.length" class="mt-12">
        <h2 class="md:text-3xl text-2xl mb-6">{{ t('projectsPage.readAlso') }}</h2>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 gap-4">
          <ProjectCard
            v-for="(rel, index) in relatedProjects"
            :key="index"
            :img="rel.image"
            :title="rel.title"
            :description="rel.excerpt"
            :date="formatDate(rel.date)"
            :link="localePath({ name: 'projects-slug', params: { slug: rel.slug } })"
          />
        </div>
      </section>
    </div>
  </div>

  <JoinUs />
</template>

<script setup lang="ts">
import { useRoute } from '#imports';
import { useI18n, useLocalePath } from '#imports';
import { computed } from 'vue';

import JoinUs from '~/components/joinUs.vue';
import ProjectCard from '~/components/project/projectCard.vue';

import skProjects from '~/data/projects/sk.json';
import enProjects from '~/data/projects/en.json';

const route = useRoute();
const { locale, t } = useI18n();
const localePath = useLocalePath();

const slug = computed(() => route.params.slug as string);

interface ProjectFrontmatter {
  title: string;
  slug: string;
  date?: string;
  image?: string;
  heroImage?: string;
  excerpt?: string;
  body: string;
}

const allProjects: Record<string, ProjectFrontmatter[]> = {
  sk: skProjects as ProjectFrontmatter[],
  en: enProjects as ProjectFrontmatter[],
};

const projectsForLocale = computed(() => {
  const lang = locale.value === 'en' ? 'en' : 'sk';
  return allProjects[lang] ?? [];
});

const project = computed<ProjectFrontmatter | null>(() => {
  const found = projectsForLocale.value.find((p) => p.slug === slug.value);
  if (!found) return null;
  return {
    ...found,
    heroImage: found.heroImage || found.image,
    body: found.body || '',
  };
});

const formattedDate = computed(() => {
  if (!project.value?.date) return '';
  return new Date(project.value.date).toLocaleDateString(
    locale.value === 'en' ? 'en-US' : 'sk-SK',
    { day: 'numeric', month: 'long', year: 'numeric' }
  );
});

function formatDate(dateStr?: string) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString(
    locale.value === 'en' ? 'en-US' : 'sk-SK',
    { month: 'long', year: 'numeric' }
  );
}

// Related: 3 most recent other projects
const relatedProjects = computed<ProjectFrontmatter[]>(() => {
  return [...projectsForLocale.value]
    .filter((p) => p.slug !== slug.value)
    .sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 3);
});
</script>
