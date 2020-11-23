<template>
  <div></div>
</template>

<script>
export default {
  auth: false,
  mounted() {
    this.$auth.loginWith('auth0');
  },
  methods: {},
};
</script>

<style lang="scss"></style>
