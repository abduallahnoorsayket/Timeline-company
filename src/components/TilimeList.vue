<template>
  <div>
    <div class="title">
      <h2>Our company milestone</h2>
      <h5 class="text-muted">Wow ! what a journry so far</h5>
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
                <div
                  class="row"
                  v-for="(item, index) in all_posts"
                  :key="index"
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
                      <div class="timeline-text">
                        <h3 v-if="item.title">{{ item.title }}</h3>
                        <p>{{ item.sub_title }}</p>
                        <div
                          class="image-container d-flex mt-2"
                          v-if="item.images"
                        >
                          <template
                            v-for="(image, index) in item.images"
                            :key="index"
                          >
                            <img
                              v-if="item.images"
                              :src="image.image_url"
                              alt="no image"
                            />
                          </template>
                        </div>
                      </div>
                      <div class="date-content float-right">
                        <h6>{{ item.month }}</h6>
                        <h1>{{ item.date }}</h1>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- modal  type  -->
    <teleport to="body" v-if="showModal">
      <div id="modal-window" :class="[showModal ? 'modal' : null]">
        <div class="modal-dialog">
          <div class="row">
            <div class="col-md-12">
              <div class="modal-content">
                <div class="card-header">Add new Post</div>
                <div class="card-body">
                  <form
                    class="m-4"
                    @submit.prevent="submitAddNewPost"
                    autocomplete="off"
                  >
                    <div class="row mt-4">
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Post Title"
                          v-model="form_data.title"
                          required
                        />
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Post SubTitle"
                          v-model="form_data.sub_title"
                          required
                        />
                      </div>
                      <div class="col">
                        <select
                          class="form-control"
                          v-model="form_data.direction"
                          required
                        >
                          <option selected disabled>Select direction</option>
                          <option value="left">left</option>
                          <option value="right">right</option>
                        </select>
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Month"
                          v-model="form_data.month"
                          required
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Date"
                          v-model="form_data.date"
                          required
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Year"
                          v-model="form_data.year"
                          required
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    class="mt-0 float-right ml-2 btn btn-outline-success"
                    @click="submitAddNewPost()"
                  >
                    Sumit
                  </button>
                  <button
                    class="mt-0 float-right ml-2 btn btn-success"
                    @click="CloseModal()"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      form_data: {
        title: null,
        sub_title: null,
        month: null,
        date: null,
        year: null,
        direction: null,
      },
    };
  },
  computed: {
    all_posts() {
      return this.$store.getters.getPosts
        .slice()
        .sort((a, b) => b.date - a.date);
    },
  },
  updated() {},
  methods: {
    openAddPostModal() {
      this.showModal = !this.showModal;
      this.form_data.title == null;
      this.form_data.sub_title == null;
      this.form_data.month == null;
      this.form_data.date == null;
      this.form_data.year == null;
      this.form_data.date == null;
    },
    CloseModal() {
      let m = document.querySelector("#modal-window");
      m.classList.add("hideModal");

      setTimeout(() => {
        this.showModal = !this.showModal;
      }, 500);
    },
    submitAddNewPost() {
      if (
        this.form_data.title &&
        this.form_data.sub_title &&
        this.form_data.month &&
        this.form_data.date &&
        this.form_data.year &&
        this.form_data.date !== null
      ) {
        this.$store.dispatch("submitdata", this.form_data);
      }

      this.CloseModal();
    },
  },
};
</script>

<style></style>
