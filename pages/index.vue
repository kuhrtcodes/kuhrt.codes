<template>
  <div class="container">
    <div>
      <h1 class="title">Kuhrt.Codes</h1>
      <div class="links">
        <a
          href="https://github.com/Kuhrt"
          target="_blank"
          rel="noopener noreferrer"
          class="button"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({});
</script>

<style>
.container {
  @apply flex justify-center items-center text-center mx-auto;
  min-height: 100%;
}
</style>
