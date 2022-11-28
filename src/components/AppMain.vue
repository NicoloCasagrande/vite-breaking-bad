<script>
import SectionCharacters from "./SectionCharacters.vue";

export default {
  name: "AppMain",
  components: {
    SectionCharacters,
  },
};
</script>

<template>
  <select name="category" id="" class="ms-2 my-3">
    <option value="" disabled selected>Select Category</option>
    <option value="deceased">Deceased</option>
    <option value="alive">Alive</option>
    <option value="presumed-dead">Presumed Dead</option>
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
