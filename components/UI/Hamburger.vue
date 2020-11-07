<template>
  <button type="button" class="hamburger">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.hamburger {
  @apply inline-flex items-center justify-center p-2 rounded-md text-gray-400;
  @include default-transition;

  &:hover {
    @apply text-gray-600 bg-gray-100;
  }

  &:focus {
    @apply outline-none bg-gray-100 text-gray-500;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
