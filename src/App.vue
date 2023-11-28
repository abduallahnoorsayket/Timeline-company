<template>
  <TilimeList />
</template>

<script>
import TilimeList from "./components/TilimeList.vue";

export default {
  name: "App",
  components: {
    TilimeList,
  },
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
};
</script>

<style>
@import "./styles/main.css";
</style>
