<template>
  <NuxtLink
    class="rounded hover:shadow-[0px_4px_10px_0px_rgba(9,24,81,0.15)] transition duration-200 bg-mcs-grey group"
    to="/projects"
  >
    <NuxtImg
      class="w-full h-48 object-cover"
      src="/images/project-thumbnail.jpg"
      alt="Project Thumbnail"
    />
    <div class="px-5 pb-5 pt-4 flex flex-col gap-3">
      <h3 class="text-xl font-medium text-txt-black-prim transition-colors duration-200 group-hover:text-mcs-orange">
        {{ title }}
      </h3>
      <p class="text-base text-txt-black-sec line-clamp-4">
        {{ description }}
      </p>
      <div class="flex justify-between items-center">
        <p class="text-base text-txt-black-sec font-light">
          {{ date }}
        </p>
        <ButtonSec
          class="z-100 inline"
          text="Zúčastniť sa"
          @click.stop="() => router.push(link || '/gallery')"
        />
      </div>
    </div>
  </NuxtLink>

</template>

<script setup lang="ts">
import ButtonSec from "~/components/buttonSec.vue";
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps<{
  img?: string,
  title?: string,
  description?: string,
  date?: string,
  link?: string,
}>()
</script>