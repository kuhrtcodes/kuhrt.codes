<template>
  <div class="relative min-h-screen bg-white">
    <Header class="absolute top-0 left-0 w-full" />
    <main>
      <slot />
    </main>
    <Footer class="absolute bottom-0 left-0 w-full" />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Kuhrt.Codes',
  ogTitle: 'Kuhrt.Codes',
  description: 'Web Developer',
  ogDescription: 'Web Developer',
  twitterCard: 'summary_large_image'
});
</script>
