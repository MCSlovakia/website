<template>
  <div
    class="bg-mcs-grey rounded p-5 min-h-[180px] flex flex-col items-center justify-center gap-4 text-center"
  >
    <div class="h-20 w-full flex items-center justify-center">
      <img
        v-if="props.logo"
        class="max-h-full max-w-full object-contain"
        :src="props.logo"
        :alt="props.name || 'Partner Logo'"
        loading="lazy"
      />
    </div>
    <p
      v-if="props.name"
      class="text-sm font-semibold leading-snug text-txt-black-prim"
    >
      {{ props.name }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  logo?: string;
  name?: string;
}>();
</script>
