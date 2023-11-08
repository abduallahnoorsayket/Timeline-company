<template>
  <TilimeList />
  <!-- <testcompTwoVue /> -->
</template>

<script>
// import testcompTwoVue from "./components/testcompTwo.vue";
import TilimeList from "./components/TilimeList.vue";
// import testcompTwoVue

export default {
  name: "App",
  components: {
    TilimeList,
    // testcompTwoVue,
  },
};
</script>

<style>
@import "./styles/main.css";
</style>
