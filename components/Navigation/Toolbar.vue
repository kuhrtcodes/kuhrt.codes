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
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  width: 100%;
  z-index: 1000;

  .logo {
    height: 2rem;

    @media screen and (min-width: $sm) {
      height: 2.5rem;
    }
  }
}
</style>
