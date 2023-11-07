<template>
  <div>
    <div class="title">
      <h2>Our company milestone</h2>
      <h5 class="text-muted">Wow ! what a journry so far</h5>
    </div>
    <div class="timeline">
      <div class="container">
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
                        <div class="image-container d-flex mt-2">
                          <img src="" alt="" />
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
                <!-- <div class="row timeline-right">
                  <div class="col-md-6">
                    <p class="timeline-date"></p>
                  </div>
                  <div class="col-md-6">
                    <div class="timeline-box">
                      <div class="timeline-icon d-md-none d-block">
                        <i class="fa fa-business-time"></i>
                      </div>
                      <div class="timeline-text">
                        <h3>Lorem ipsum dolor</h3>
                        <p>Lorem ipsum dolor sit amet elit ornare velit non</p>
                      </div>
                      <div class="date-content float-right">
                        <h6>Oct</h6>
                        <h1>01</h1>
                        <h6>2020</h6>
                      </div>
                    </div>
                  </div>
                </div> -->

                <!-- <div class="row timeline-left">
                  <div class="col-md-6 d-md-none d-block">
                    <p class="timeline-date"></p>
                  </div>
                  <div class="col-md-6">
                    <div class="timeline-box">
                      <div class="timeline-icon d-md-none d-block">
                        <i class="fa fa-business-time"></i>
                      </div>
                      <div class="timeline-text">
                        <h3>Lorem ipsum dolor</h3>
                        <p>Lorem ipsum dolor sit amet elit ornare velit non</p>
                      </div>
                      <div class="date-content float-right">
                        <h6>Oct</h6>
                        <h1>01</h1>
                        <h6>2020</h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 d-md-block d-none">
                    <p class="timeline-date"></p>
                  </div>
                </div>

                <div class="row timeline-right">
                  <div class="col-md-6">
                    <p class="timeline-date"></p>
                  </div>
                  <div class="col-md-6">
                    <div class="timeline-box">
                      <div class="timeline-icon d-md-none d-block">
                        <i class="fa fa-business-time"></i>
                      </div>
                      <div class="timeline-text">
                        <h3>Lorem ipsum dolor</h3>
                        <p>Lorem ipsum dolor sit amet elit ornare velit non</p>
                      </div>
                      <div class="date-content float-right">
                        <h6>Oct</h6>
                        <h1>01</h1>
                        <h6>2020</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row timeline-left">
                  <div class="col-md-6 d-md-none d-block">
                    <p class="timeline-date"></p>
                  </div>
                  <div class="col-md-6">
                    <div class="timeline-box">
                      <div class="timeline-icon d-md-none d-block">
                        <i class="fa fa-business-time"></i>
                      </div>
                      <div class="timeline-text">
                        <h3>Lorem ipsum dolor</h3>
                        <p>Lorem ipsum dolor sit amet elit ornare velit non</p>
                      </div>
                      <div class="date-content float-right">
                        <h6>Oct</h6>
                        <h1>01</h1>
                        <h6>2020</h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 d-md-block d-none">
                    <p class="timeline-date"></p>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    all_posts() {
      return this.$store.state.posts;
    },
  },
};
</script>

<style></style>
