<template>
  <div class="flex lg:mx-auto mx-5 justify-center">
    <div class="flex flex-col md:gap-6 sm:gap-5 gap-4 md:mt-[90px] mt-[50px] xl:w-[1180px] lg:w-[940px] w-full">
      <h1 class="md:text-5xl sm:text-3xl text-2xl">{{t('header.articles')}}</h1>
      <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-4">
        <ArticleCard
          v-for="(article, index) in pagedArticles"
          :key="index"
          :img="article.img"
          :title="article.title"
          :excerpt="article.excerpt"
          :author="article.author"
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
import { useI18n } from '#imports';
const { t } = useI18n();
import { ref, computed } from 'vue'
import JoinUs from "~/components/joinUs.vue";
import ArticleCard from "~/components/articles/articleCard.vue";
import ButtonSec from '~/components/buttonSec.vue';

const pageSize = 18
const currentPage = ref(1)
const pageCount = computed(() => Math.ceil(articlesContent.length / pageSize))

const pagedArticles = computed(() =>
    articlesContent.slice((currentPage.value - 1) * pageSize, currentPage.value * pageSize)
)

function goToPage(page: number) {
  if (page >= 1 && page <= pageCount.value) {
    currentPage.value = page
  }
}

const articlesContent = [
  // {
  //   img: 'https://example.com/article1.png',
  //   title: 'Model Conferences Slovakia: Budúcnosť lídrov',
  //   excerpt: 'MCS organizuje simulácie OSN a NATO, kde študenti získavajú reálne skúsenosti.',
  //   author: 'Redakcia',
  // }
]

</script>