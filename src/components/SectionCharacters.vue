<script>
import axios from "axios";
import CardCharacters from "./CardCharacters.vue";
export default {
  components: {
    CardCharacters,
  },
  data() {
    return {
      characters: [],
    };
  },
  created() {
    axios.get("https://www.breakingbadapi.com/api/characters").then((resp) => {
      this.characters = resp.data;
    });
  },
};
</script>

<template>
  <section>
    <div class="row">
      <CardCharacters
        v-for="character in characters"
        class="col"
        :info="character"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
