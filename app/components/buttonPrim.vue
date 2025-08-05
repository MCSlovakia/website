<template>
  <button
      :disabled="disabled"
      :class="[
          'text-[18px] pt-2.5 pb-3 px-6 rounded transition duration-100 ease-in-out',
          disabled
              ? 'cursor-not-allowed bg-[var(--disabled)] text-[var(--disabled-txt)]'
              : active
                ? 'bg-[var(--mcs-orange-dark)] text-[var(--txt-white-prim)] hover:bg-[var(--mcs-orange-light)]'
                : 'bg-[var(--mcs-orange)] text-[var(--txt-white-prim)] hover:bg-[var(--mcs-orange-light)]',
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