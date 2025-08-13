<template>
  <button
      :disabled="disabled"
      :class="[
          'text-[18px] pt-2.5 pb-3 px-6 rounded transition duration-100 ease-in-out',
          disabled
              ? 'cursor-not-allowed border border-disabled text-disabled-txt'
              : active
                ? 'bg-mcs-orange-dark text-txt-white-prim hover:bg-mcs-orange-light'
                : 'bg-transparent border border-mcs-orange text-txt-black-prim hover:bg-mcs-orange hover:text-txt-white-prim',
      ]"
      @click="onClick"
  >
    {{ text}}
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

const { text, onClick, disabled = false, active = false } = props;
</script>