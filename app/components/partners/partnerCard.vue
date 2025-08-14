<template>
  <div class="bg-mcs-grey rounded p-5 flex items-center justify-center">
    <NuxtImg
      v-if="props.logo"
      :src="props.logo"
      alt="Partner Logo"
      loading="lazy"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  logo?: string;
}>();

</script>