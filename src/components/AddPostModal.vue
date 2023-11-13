<template>
  <teleport to="body" v-if="AddModalVisible">
    <div id="modal-window" :class="[AddModalVisible ? 'modal' : null]">
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
                  <div class="row mt-2">
                    <div class="col">
                      <label for="">Post Title</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form_data.title"
                        required
                      />
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="col">
                      <label for="">Post SubTitle</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="form_data.sub_title"
                        required
                      />
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="col">
                      <label for="">Post Date</label>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="Date"
                        v-model="form_data.date"
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
</template>

<script>
export default {
  name: "AddPostModal",
  data() {
    return {
      form_data: {
        title: null,
        sub_title: null,
        month: null,
        date: null,
        date_numer: null,
        year: null,
        direction: null,
      },
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
  created() {},
  computed: {
    AddModalVisible() {
      return this.$store.state.isModalVisible;
    },
  },

  methods: {
    submitAddNewPost() {
      if (
        this.form_data.title &&
        this.form_data.sub_title &&
        this.form_data.date !== null
      ) {
        let resultdate = new Date(this.form_data.date);
        let dd = resultdate.getDate();
        let mm = resultdate.getMonth();
        let yyyy = resultdate.getFullYear();
        if (dd < 10) {
          dd = "0" + dd;
        }
        if (mm < 10) {
          mm = "0" + mm;
        }

        this.form_data.year = yyyy;
        this.form_data.month = this.post_months[mm].name;
        this.form_data.date_numer = dd;
        this.form_data.direction =
          this.$store.state.posts.length % 2 == 0 ? "right" : "left";
        this.$store.dispatch("submitdata", this.form_data);

        this.CloseModal();
      }
    },
    CloseModal() {
      let m = document.querySelector("#modal-window");
      m.classList.add("hideModal");

      setTimeout(() => {
        this.$store.commit("toggleModal");
      }, 500);
    },
  },
};
</script>

<style></style>
