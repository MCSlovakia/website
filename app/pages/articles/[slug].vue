<template>
  <div class="flex lg:mx-auto mx-5 justify-center">
    <div class="flex flex-col md:gap-10 gap-6 md:mt-[90px] mt-[50px] xl:w-[1180px] lg:w-[940px] w-full">
      <div v-if="article">
        <!-- Title & meta -->
        <h1 class="md:text-5xl sm:text-3xl text-2xl font-semibold mb-2">{{ article.title }}</h1>
        <p class="text-sm text-txt-black-sec mb-6">
          <span v-if="article.authors && article.authors.length">{{ article.authors.join(', ') }}</span>
          <span v-if="article.authors && article.authors.length && formattedDate"> — </span>
          <span v-if="formattedDate">{{ formattedDate }}</span>
        </p>

        <!-- Hero image -->
        <NuxtImg
          v-if="article.heroImage"
          :src="article.heroImage"
          alt="Article hero image"
          class="w-full md:h-[420px] h-[260px] object-cover rounded mb-10"
        />

        <!-- Body -->
        <article class="prose max-w-none prose-p:text-txt-black-sec prose-headings:text-txt-black-prim">
          <div v-html="article.body" />
        </article>
      </div>

      <div v-else>
        <p>Article not found.</p>
      </div>

      <!-- Read also -->
      <section v-if="relatedArticles.length" class="mt-12">
        <h2 class="md:text-3xl text-2xl mb-6">{{ t('articles.readAlso') }}</h2>
        <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-4">
          <ArticleCard
            v-for="(rel, index) in relatedArticles"
            :key="index"
            :img="rel.image"
            :title="rel.title"
            :excerpt="rel.excerpt"
            :author="rel.authors?.join(', ') || rel.author"
            :to="localePath({ name: 'articles-slug', params: { slug: rel.slug } })"
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
import ArticleCard from '~/components/articles/articleCard.vue';

import skArticles from '~/data/articles/sk.json';
import enArticles from '~/data/articles/en.json';

const route = useRoute();
const { locale, t } = useI18n();
const localePath = useLocalePath();

const slug = computed(() => route.params.slug as string);

interface ArticleFrontmatter {
  title: string;
  slug: string;
  date?: string;
  authors?: string[];
  author?: string; // fallback for CMS config with single author
  image?: string;
  heroImage?: string;
  excerpt?: string;
  body: string;
}
const allArticles: Record<string, ArticleFrontmatter[]> = {
  sk: skArticles as ArticleFrontmatter[],
  en: enArticles as ArticleFrontmatter[],
};

const articlesForLocale = computed(() => {
  const lang = locale.value === 'en' ? 'en' : 'sk';
  return allArticles[lang] ?? [];
});

const article = computed<ArticleFrontmatter | null>(() => {
  const list = articlesForLocale.value;
  const found = list.find((a) => a.slug === slug.value);
  if (!found) return null;
  const heroImage = found.heroImage || found.image;
  const authors: string[] | undefined = found.authors || (found.author ? [found.author] : undefined);

  return {
    ...found,
    authors,
    heroImage,
    body: found.body || '',
  };
});

const formattedDate = computed(() => {
  if (!article.value?.date) return '';
  const d = new Date(article.value.date);
  return d.toLocaleDateString(locale.value === 'en' ? 'en-US' : 'sk-SK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
});

// Related articles: 3 most recent others from same locale
const relatedArticles = computed<ArticleFrontmatter[]>(() => {
  const list = articlesForLocale.value.filter((a) => a.slug !== slug.value);
  return [...list]
    .sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 3);
});
</script>
