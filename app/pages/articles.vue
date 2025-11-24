<template>
  <div class="flex lg:mx-auto mx-5 justify-center">
    <div class="flex flex-col md:gap-6 sm:gap-5 gap-4 md:mt-[90px] mt-[50px] xl:w-[1180px] lg:w-[940px] w-full">
      <h1 class="md:text-5xl sm:text-3xl text-2xl">{{ t('header.articles') }}</h1>

      <!-- ARTICLES GRID -->
      <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-4">
        <ArticleCard
          v-for="article in pagedArticles"
          :key="article._path"
          :img="article.thumbnail"
          :title="article.title"
          :excerpt="article.description || article.excerpt"
          :author="article.author"
          :slug="article._slug"      <!-- dôležité -->
        />
      </div>

      <!-- PAGINATION -->
      <div class="flex gap-2 justify-center mt-6" v-if="pageCount > 1">
        <ButtonSec
          class="text-txt-black-prim"
          icon="ri-arrow-left-s-line"
          :disabled="currentPage === 1"
          @click="goToPage(currentPage - 1)"
        />

        <ButtonSec
          v-for="page in pageCount"
          :key="page"
          :text="String(page)"
          :active="page === currentPage"
          @click="goToPage(page)"
        />

        <ButtonSec
          class="text-txt-black-prim"
          icon="ri-arrow-right-s-line"
          :disabled="currentPage === pageCount"
          @click="goToPage(currentPage + 1)"
        />
      </div>
    </div>
  </div>

  <JoinUs />
</template>

<script setup lang="ts">
import { useI18n } from '#imports'
import { ref, computed } from 'vue'
import { queryContent } from '#content'
import JoinUs from '~/components/joinUs.vue'
import ArticleCard from '~/components/articles/articleCard.vue'
import ButtonSec from '~/components/buttonSec.vue'

const { t } = useI18n()

// -----------------------------------------------------
// LOAD ALL POSTS FROM /content/posts
// -----------------------------------------------------
const { data: articles } = await useAsyncData('articles-list', () =>
  queryContent('/posts')
    .sort({ date: -1 })
    .find()
)

// -----------------------------------------------------
// PAGINATION LOGIC
// -----------------------------------------------------
const pageSize = 18
const currentPage = ref(1)

const pageCount = computed(() => {
  return Math.ceil((articles.value?.length || 0) / pageSize)
})

const pagedArticles = computed(() => {
  if (!articles.value) return []
  const start = (currentPage.value - 1) * pageSize
  const end = currentPage.value * pageSize
  return articles.value.slice(start, end)
})

function goToPage(page: number) {
  if (page >= 1 && page <= pageCount.value) {
    currentPage.value = page
  }
}
</script>
