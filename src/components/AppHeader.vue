<script>
import AppLogo from "./AppLogo.vue";
export default {
  name: "AppHeader",
  components: {
    AppLogo,
  },
};
</script>

<template>
  <div class="d-flex align-items-center">
    <AppLogo />
    <h1>Breaking Bad Api</h1>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  color: white;
}
</style>
