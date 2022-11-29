<script>
import { store } from "../store";
import axios from "axios";
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
  methods: {
    searchParameters() {
      axios
        .get("https://www.breakingbadapi.com/api/characters", {
          params: {
            category: this.store.searchText,
          },
        })
        .then((resp) => {
          this.store.characters = resp.data;
        });
    },
  },
  created() {
    this.searchParameters();
  },
};
</script>

<template>
  <select
    name="category"
    id=""
    class="ms-2 my-3"
    v-model="store.searchText"
    @click="searchParameters"
  >
    <option value="">Select Category</option>
    <option value="Breaking Bad">Breaking Bad</option>
    <option value="Better Call Saul">Better Call Saul</option>
  </select>
  <div class="px-3">
    <SectionCharacters />
  </div>
</template>

<style lang="scss" scoped>
div {
  background-color: white;
}
</style>
