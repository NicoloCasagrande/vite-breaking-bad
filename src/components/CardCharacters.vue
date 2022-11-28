<script>
export default {
  name: "CardCharacters",
  props: {
    info: Object,
  },
};
</script>

<template>
  <div class="d-flex flex-column justify-content-center align-items-center m-3">
    <img :src="info.img" alt="" />
    <h3>{{ info.name }}</h3>
    <span>{{ info.category }}</span>
    <span>{{ info.status }}</span>
  </div>
</template>

<style lang="scss" scoped>
div {
  background-color: #2e3a46;
  height: 28.125rem;
  width: 13.75rem;
}

img {
  width: 11.875rem;
  height: auto;
}
h3 {
  color: white;
}

span {
  color: gray;
}
</style>
