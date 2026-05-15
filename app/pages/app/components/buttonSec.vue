<template>
  <button
      :disabled="props.disabled"
      :class="[
          'text-[18px] pt-2.5 pb-3 px-6 rounded transition duration-100 ease-in-out',
          props.disabled
              ? 'cursor-not-allowed border border-disabled text-disabled-txt'
              : props.active
                ? 'bg-mcs-orange-dark text-txt-white-prim hover:bg-mcs-orange-light'
                : 'bg-transparent border border-mcs-orange text-txt-black-prim hover:bg-mcs-orange hover:text-txt-white-prim',
      ]"
      @click="props.onClick"
  >
    <i v-if="props.icon" :class="props.icon"></i>
    <span v-if="props.text">{{ props.text }}</span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  text?: string;
  icon?: string;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
}>();
</script>