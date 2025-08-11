<template>
    <div class="bg-mcs-blue">
        <div class="flex p-4 place-content-between items-center max-w-[1180px] mx-auto">
            <NuxtLink to="/"><img src="/assets/logo/logo-header.svg" alt="MCS logo"></NuxtLink>
            <button class="block sm:hidden" @click="isOpen = true" aria-label="Open menu" :aria-expanded="isOpen ? 'true' : 'false'">
                <i class="ri-menu-3-line text-mcs-white text-2xl"></i>
            </button>
            <nav class="hidden sm:flex space-x-6">
                <NuxtLink to="/about" class="text-mcs-white hover:text-mcs-orange transition-colors">{{ $t('header.about') }}</NuxtLink>
                <NuxtLink to="/projects" class="text-mcs-white hover:text-mcs-orange transition-colors">{{ $t("header.projects") }}</NuxtLink>
                <NuxtLink to="/partners" class="text-mcs-white hover:text-mcs-orange transition-colors">{{ $t("header.partners") }}</NuxtLink>
                <NuxtLink to="/support-us" class="text-mcs-white hover:text-mcs-orange transition-colors">{{ $t("header.support-us") }}</NuxtLink>
                <NuxtLink to="/articles" class="text-mcs-white hover:text-mcs-orange transition-colors">{{ $t("header.articles") }}</NuxtLink>
            </nav>
        </div>

        <!-- Mobile full-screen menu -->
        <div v-if="isOpen" id="mobile-menu" class="fixed inset-0 z-50 sm:hidden bg-mcs-blue" role="dialog" aria-modal="true">
            <div class="absolute top-4 left-4">
                <NuxtLink to="/" @click="isOpen = false"><img src="/assets/logo/logo-header.svg" alt="MCS logo"></NuxtLink>
            </div>
            <button @click="isOpen = false" aria-label="Close menu" class="absolute top-4 right-4 text-mcs-white">
                <i class="ri-close-line text-2xl"></i>
            </button>
            <nav class="h-full w-full flex flex-col items-center justify-center space-y-10">
                <NuxtLink to="/about" @click="isOpen = false" :class="linkClass('/about')" class="text-2xl">{{ $t('header.about') }}</NuxtLink>
                <NuxtLink to="/projects" @click="isOpen = false" :class="linkClass('/projects')" class="text-2xl">{{ $t('header.projects') }}</NuxtLink>
                <NuxtLink to="/partners" @click="isOpen = false" :class="linkClass('/partners')" class="text-2xl">{{ $t('header.partners') }}</NuxtLink>
                <NuxtLink to="/support-us" @click="isOpen = false" :class="linkClass('/support-us')" class="text-2xl">{{ $t('header.support-us') }}</NuxtLink>
                <NuxtLink to="/articles" @click="isOpen = false" :class="linkClass('/articles')" class="text-2xl">{{ $t('header.articles') }}</NuxtLink>
            </nav>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref, watch } from 'vue'

const isOpen = ref(false)
const route = useRoute()

const linkClass = (path: string) => route.path.startsWith(path)
  ? 'text-mcs-orange'
  : 'text-mcs-white hover:text-mcs-orange'

watch(() => route.path, () => {
  if (isOpen.value) isOpen.value = false
})
</script>