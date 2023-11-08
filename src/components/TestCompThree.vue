<!-- components/Timeline.vue -->
<template>
  <div class="timeline-container" @scroll="loadMoreItems">
    <div class="timeline">
      <div v-for="item in timelineItems" :key="item.id" class="timeline-item">
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timelineItems: [],
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  methods: {
    loadMoreItems() {
      if (this.isAtBottom()) {
        // Simulate fetching more data (replace with your data retrieval logic)
        const newItems = this.fetchTimelineItems(this.currentPage);
        this.timelineItems = [...this.timelineItems, ...newItems];
        this.currentPage++;
      }
    },
    isAtBottom() {
      const container = this.$el.querySelector(".timeline-container");
      return (
        container.scrollTop + container.clientHeight >= container.scrollHeight
      );
    },
    fetchTimelineItems(page) {
      // Simulate fetching data from a data source (replace with your data retrieval logic)
      const newItems = [];
      for (let i = 0; i < this.itemsPerPage; i++) {
        newItems.push({
          id: this.timelineItems.length + i,
          text: `Item ${this.timelineItems.length + i}`,
        });
      }
      return newItems;
    },
  },
};
</script>

<style scoped>
/* Add your timeline and item styles here */
</style>
