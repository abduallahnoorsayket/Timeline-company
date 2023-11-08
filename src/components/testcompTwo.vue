<template>
  <div id="app">
    <ul id="theList">
      <li v-for="(item, index) in list" :key="index">
        {{ item }} number {{ index + 1 }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["Text", "Text", "Text", "Text", "Text", "Text", "Text", "Text"],
    };
  },
  mounted() {
    this.infinteScroll();
  },
  methods: {
    infinteScroll() {
      // get the ul element
      const theList = this.$el.querySelector("#theList");
      // get scroll event
      theList.addEventListener("scroll", () => {
        if (theList.scrollTop + theList.clientHeight >= theList.scrollHeight) {
          this.addText();
        }
      });
    },
    // add new text at list
    addText() {
      for (let i = 0; i < 5; i++) {
        this.list.push("Text");
      }
    },
  },
};
</script>
