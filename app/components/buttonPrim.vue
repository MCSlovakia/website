<template>
  <button
      :disabled="props.disabled"
      :class="[
          'text-[18px] pt-2.5 pb-3 px-6 rounded transition duration-100 ease-in-out',
          props.disabled
              ? 'cursor-not-allowed bg-disabled text-disabled-txt'
              : props.active
                ? 'bg-mcs-orange-dark text-txt-white-prim hover:bg-mcs-orange-light'
                : 'bg-mcs-orange text-txt-white-prim hover:bg-mcs-orange-light',
          $attrs.class
      ]"
      @click="props.onClick"
  >
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
});

const props = defineProps<{
  text?: string;
  icon?: string;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
}>();
</script>