<template>
  <header class="toolbar">
    <Logo />
    <!-- <Hamburger /> -->
  </header>
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
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;

  .logo {
    height: 2rem;

    @media screen and (min-width: $sm) {
      height: 2.5rem;
    }
  }
}
</style>
