<template>
  <TilimeList />
  <!-- <testcompTwoVue /> -->
  <!-- <TestcompFourVue /> -->
</template>

<script>
// import testcompTwoVue from "./components/testcompTwo.vue";
import TilimeList from "./components/TilimeList.vue";
// import TestcompFourVue from "./components/TestcompFour.vue";

export default {
  name: "App",
  components: {
    TilimeList,
    // testcompTwoVue,
    // TestcompFourVue,
  },
};
</script>

<style>
@import "./styles/main.css";
</style>
