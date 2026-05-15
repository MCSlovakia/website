<template>
  <div class="flex flex-col gap-4 bg-mcs-grey p-5 rounded">
    <div class="flex flex-col gap-2">
      <h3 class="font-semibold text-xl">{{ title }}</h3>
      <p class="text-txt-black-sec">{{ description }}</p>
    </div>
    <ol class="list-decimal pl-5">
      <li class="text-txt-black-sec" v-for="(point, idx) in points" :key="idx">
        {{ point }}
      </li>
    </ol>
    <p class="text-txt-black-sec">{{ paragraph }}</p>
    <ButtonSec
      :text = "buttonText"
      @click = "buttonOnClick"
    />
  </div>
</template>

<script setup lang="ts">
import ButtonSec from "~/components/buttonSec.vue";

const props = defineProps<{
  title?: string;
  description?: string;
  points?: string[];
  paragraph?: string;
  buttonText?: string;
  buttonOnClick?: () => void;
}>();

</script>