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
              <div class="timeline-continue">
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
                        <h3>{{ item.title }}</h3>
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
    <!-- modal office type  -->
    <teleport to="body" v-if="showModal">
      <!-- v-if="isEmployeeAttendModalVisible" -->
      <div id="modal-window" :class="[showModal ? 'modal' : null]">
        <!-- :class="[isEmployeeAttendModalVisible ? 'modal' : null]" -->
        <div class="modal-dialog">
          <div class="row">
            <div class="col-md-12">
              <div class="modal-content">
                <div class="card-header"></div>
                <div class="card-body">
                  <!-- <form
                    @submit.prevent="submitLoginwithOfficeType"
                    autocomplete="off"
                  >
                    <div class="form-group">
                      <div class="form-row mt-5 mb-5 mr-3 ml-3">
                        <div class="col-md-6">
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio1"
                              v-model="office_type"
                              value="Home"
                              @change="submitLoginwithOfficeType()"
                            />
                            <label class="form-check-label" for="inlineRadio1"
                              >Home Office
                            </label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio2"
                              v-model="office_type"
                              value="Physical"
                              @change="submitLoginwithOfficeType()"
                            />
                            <label class="form-check-label" for="inlineRadio2"
                              >Physical Office
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form> -->
                </div>
                <div class="modal-footer">
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
    };
  },
  computed: {
    all_posts() {
      return this.$store.state.posts;
    },
  },
  methods: {
    openAddPostModal() {
      this.showModal = !this.showModal;
    },
    CloseModal() {
      let m = document.querySelector("#modal-window");
      m.classList.add("hideModal");

      setTimeout(() => {
        this.showModal = !this.showModal;
      }, 500);
    },
  },
};
</script>

<style></style>
