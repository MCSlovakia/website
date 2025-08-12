<template>
    <header class="bg-mcs-blue flex md:justify-center justify-between items-center lg:px-auto px-5">
        <div class="flex py-4 justify-between items-center xl:w-[1180px] lg:w-[940px] w-full">
            <NuxtLink to="/"><img src="/assets/logo/logo-header.svg" alt="MCS logo"></NuxtLink>
            <nav class="hidden sm:flex space-x-6">
                <NuxtLink to="/about" @click="isOpen = false" :class="linkClass('/about')" >{{ $t('header.about') }}</NuxtLink>
                <NuxtLink to="/projects" @click="isOpen = false" :class="linkClass('/projects')" >{{ $t("header.projects") }}</NuxtLink>
                <NuxtLink to="/partners" @click="isOpen = false" :class="linkClass('/partners')" >{{ $t("header.partners") }}</NuxtLink>
                <NuxtLink to="/support-us" @click="isOpen = false" :class="linkClass('/support-us')" >{{ $t("header.support-us") }}</NuxtLink>
                <NuxtLink to="/articles" @click="isOpen = false" :class="linkClass('/articles')" >{{ $t("header.articles") }}</NuxtLink>
            </nav>
            <button class="block sm:hidden" @click="isOpen = true" aria-label="Open menu" :aria-expanded="isOpen ? 'true' : 'false'">
              <i class="ri-menu-3-line text-mcs-white text-2xl"></i>
            </button>
        </div>

        <!-- Mobile full-screen menu -->
        <div v-if="isOpen" id="mobile-menu" class="fixed inset-0 z-50 sm:hidden bg-mcs-blue" role="dialog" aria-modal="true">
            <div class="flex items-center justify-between px-5 py-4">
              <div>
                <NuxtLink to="/" @click="isOpen = false"><img src="/assets/logo/logo-header.svg" alt="MCS logo"></NuxtLink>
              </div>
              <button @click="isOpen = false" aria-label="Close menu" class="text-mcs-white">
                <i class="ri-close-line text-2xl"></i>
              </button>
            </div>
            <nav class="h-4/5 flex flex-col items-center justify-center gap-8">
                <NuxtLink to="/about" @click="isOpen = false" :class="linkClass('/about')" class="text-2xl">{{ $t('header.about') }}</NuxtLink>
                <NuxtLink to="/projects" @click="isOpen = false" :class="linkClass('/projects')" class="text-2xl">{{ $t('header.projects') }}</NuxtLink>
                <NuxtLink to="/partners" @click="isOpen = false" :class="linkClass('/partners')" class="text-2xl">{{ $t('header.partners') }}</NuxtLink>
                <NuxtLink to="/support-us" @click="isOpen = false" :class="linkClass('/support-us')" class="text-2xl">{{ $t('header.support-us') }}</NuxtLink>
                <NuxtLink to="/articles" @click="isOpen = false" :class="linkClass('/articles')" class="text-2xl">{{ $t('header.articles') }}</NuxtLink>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const isOpen = ref(false)
const route = useRoute()

const linkClass = (path: string) => route.path === path
  ? 'text-mcs-orange-light hover:text-mcs-orange'
  : 'text-mcs-white hover:text-mcs-orange-light'

watch(() => route.path, () => {
  if (isOpen.value) isOpen.value = false
})
</script>