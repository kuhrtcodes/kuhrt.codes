<template>
  <a
    :href="link"
    class="flex items-center justify-end text-dark-gray-900 hover:text-black"
  >
    <slot />
  </a>
</template>
<script setup lang="ts">
const props = defineProps({
  link: { type: String, required: true }
});
</script>
