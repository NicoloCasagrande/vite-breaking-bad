<script>
import { store } from "../store";
import CardCharacters from "./CardCharacters.vue";
export default {
  components: {
    CardCharacters,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section>
    <div class="pt-2">
      <span>Found {{ store.characters.length }} characters</span>
    </div>
    <div class="row">
      <div class="col" v-for="character in store.characters">
        <CardCharacters :info="character" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
span {
  padding: 0.1875rem 0.3125rem;
  border-radius: 0.375rem;
  background-color: #2e3a46;
  color: white;
}
</style>
