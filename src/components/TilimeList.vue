<template>
  <div class="main-container">
    <AddPostModal v-if="AddModalVisible" />
    <div class="m-4">
      <h3><strong>Timeline</strong></h3>
      <p class="time-line-bredcrumb">
        PAGES <i class="fa fa-arrow-right" aria-hidden="true"></i>

        TIMELINE
      </p>
    </div>
    <div class="title mt-5">
      <h2>Our company milestone</h2>
      <h5 class="text-muted uppercase">Wow!!! what a journry so far ... !!!</h5>
    </div>
    <div class="timeline">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="float-right">
              <button
                type="button"
                class="btn btn-outline-primary"
                @click="openAddPostModal()"
              >
                Add post
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="timeline-container">
              <div class="timeline-continue" v-if="all_posts">
                <TimeCard
                  v-for="(item, index) in all_posts"
                  :key="index"
                  :card_object="item"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimeCard from "./TimeCard.vue";
import AddPostModal from "./AddPostModal.vue";

export default {
  components: {
    TimeCard,
    AddPostModal,
  },
  data() {
    return {
      showModal: false,

      post_months: [
        { name: "Jan", numeric: 1 },
        { name: "Feb", numeric: 2 },
        { name: "Mar", numeric: 3 },
        { name: "Apr", numeric: 4 },
        { name: "May", numeric: 5 },
        { name: "Jun", numeric: 6 },
        { name: "Jul", numeric: 7 },
        { name: "Aug", numeric: 8 },
        { name: "Sept", numeric: 9 },
        { name: "Oct", numeric: 10 },
        { name: "Nov", numeric: 11 },
        { name: "Dec", numeric: 12 },
      ],
    };
  },
  computed: {
    all_posts() {
      return this.$store.getters.getPosts
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    },
    AddModalVisible() {
      return this.$store.state.isModalVisible;
    },
  },
  created() {},
  updated() {},
  mounted() {
    // setTimeout(() => {
    // }, 500);
    this.getNextCard();
  },
  methods: {
    async openAddPostModal() {
      this.$store.commit("toggleModal");
    },

    // for infinite scrolling
    getNextCard() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          for (let i = 6; i < 9; i++) {
            this.$store.dispatch("submitdata", {
              title: `Lorem Ipsum is simply dummy title ${i}`,
              sub_title:
                "Lorem Ipsum is simply dummy text of the.There are many variations of passages of Lorem Ipsum available.",
              images:
                i % 2 == 0
                  ? null
                  : [
                      {
                        image_url:
                          "https://images.pexels.com/photos/6794921/pexels-photo-6794921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                      },
                      {
                        image_url:
                          "https://images.pexels.com/photos/6794966/pexels-photo-6794966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                      },
                      {
                        image_url:
                          "https://images.pexels.com/photos/4916238/pexels-photo-4916238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                      },
                    ],
              month: this.post_months[i].name,
              date: "2023-10-13",
              date_numer: i,
              year: `202${i}`,
              direction: i % 2 == 0 ? "left" : "right",
              profileImage:
                i % 2 == 0
                  ? "https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  : null,
            });
          }
        }
      };
    },
  },
};
</script>

<style></style>
