<script>
import { store } from "../store.js";

import SectionCharacters from "./SectionCharacters.vue";

export default {
  name: "AppMain",
  components: {
    SectionCharacters,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <select name="category" id="" class="ms-2 my-3" v-model="store.searchText">
    <option value="" disabled selected>Select Category</option>
    <option value="Deceased">Deceased</option>
    <option value="Alive">Alive</option>
    <option value="Presumed Dead">Presumed Dead</option>
  </select>
  <div>
    <SectionCharacters />
  </div>
</template>

<style lang="scss" scoped>
div {
  background-color: white;
}
</style>
