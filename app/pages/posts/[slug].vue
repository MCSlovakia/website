<template>
  <div class="flex justify-center mx-5 lg:mx-auto">
    <div class="flex flex-col gap-6 md:mt-[90px] mt-[50px] xl:w-[1180px] lg:w-[940px] w-full">

      <!-- Nadpis -->
      <h1 class="md:text-5xl sm:text-3xl text-2xl font-semibold">
        {{ article.title }}
      </h1>

      <!-- Dátum + autor -->
      <p class="text-sm text-gray-500">
        {{ formatDate(article.date) }}
        <span v-if="article.author"> • {{ article.author }}</span>
      </p>

      <!-- Thumbnail -->
      <NuxtImg
        v-if="article.thumbnail"
        :src="article.thumbnail"
        class="w-full h-[350px] object-cover rounded-xl"
        alt="Thumbnail"
      />

      <!-- Text článku -->
      <div class="prose prose-lg max-w-none prose-img:rounded-xl" v-html="article.body"></div>

    </div>
  </div>

  <JoinUs />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { queryContent } from '#imports'
import JoinUs from '~/components/joinUs.vue'

const route = useRoute()
const slug = route.params.slug as string

const article = await queryContent(`posts/${slug}`).findOne()

function formatDate(dateString: string) {
  const d = new Date(dateString)
  return d.toLocaleDateString('sk-SK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
