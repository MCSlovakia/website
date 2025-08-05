<template>
    <div class="flex p-5 place-content-between">
        <NuxtLink to="/"><img src="/assets/logo/logo-header.svg"></NuxtLink>
        <button class="block sm:hidden" @click="">
            <i class="ri-menu-3-line"></i>
        </button>
        <nav class="hidden sm:flex space-x-6">
            <NuxtLink to="/" class="">Home</NuxtLink>
            <NuxtLink to="/about" class="">About</NuxtLink>
            <NuxtLink to="/services" class="">Services</NuxtLink>
            <NuxtLink to="/contact" class="">Contact</NuxtLink>
        </nav>
    </div>
</template>