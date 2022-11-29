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
    <h6>{{ info.name.toUpperCase() }}</h6>
    <span>{{ info.category }}</span>
    <span>{{ info.status }}</span>
  </div>
</template>

<style lang="scss" scoped>
div {
  background-color: #2e3a46;
  height: 28.125rem;
  width: 13.75rem;
  text-align: center;
}

img {
  width: 11.875rem;
  height: 15.625rem;
  object-fit: contain;
  margin-bottom: 3.125rem;
}
h6 {
  color: white;
}

span {
  color: gray;
}
</style>
