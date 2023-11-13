<template>
  <div
    v-if="item"
    class="row"
    :class="{
      'timeline-right': item.direction === 'right',
      'timeline-left': item.direction === 'left',
    }"
  >
    <div
      class="col-md-6"
      :class="{
        '': item.direction === 'right',
        'd-md-none d-block': item.direction === 'left',
      }"
    >
      <p class="timeline-date"></p>
    </div>
    <div class="col-md-6">
      <div class="timeline-box">
        <div class="timeline-icon d-md-none d-block">
          <i class="fa fa-business-time"></i>
        </div>
        <div class="timeline-text d-flex">
          <div class="image-container" v-if="item.profileImage">
            <img :src="item.profileImage" alt="" />
          </div>
          <div class="timeline-content">
            <h3 v-if="item.title">{{ item.title }}</h3>
            <p>{{ item.sub_title }}</p>
            <div class="image-container d-flex mt-2" v-if="item.images">
              <template v-for="(image, index) in item.images" :key="index">
                <img v-if="item.images" :src="image.image_url" alt="no image" />
              </template>
            </div>
          </div>
        </div>
        <div class="date-content float-right">
          <h6>{{ item.month }}</h6>
          <h1>{{ item.date_numer }}</h1>
          <h6>{{ item.year }}</h6>
        </div>
      </div>
    </div>
    <div
      v-if="item.direction === 'left'"
      :class="{
        '': item.direction === 'right',
        'col-md-6 d-md-block d-none': item.direction === 'left',
      }"
    >
      <p class="timeline-date"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeCard",
  props: ["card_object"],
  data() {
    return {
      item: null,
    };
  },
  created() {
    if (this.$props.card_object) {
      this.item = this.$props.card_object;
    }
  },
  updated() {
    if (this.$props.card_object) {
      this.item = this.$props.card_object;
    }
  },
  // watch: {},
};
</script>

<style></style>
