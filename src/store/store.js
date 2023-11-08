import { createStore } from "vuex";

const store = createStore({
  state: {
    posts: [
      {
        title: "Office Starting function",
        sub_title:
          "Post subtitle 1 ,It is a long established fact that a reader will be distracted",
        images: [
          {
            image_url:
              "https://images.pexels.com/photos/7439754/pexels-photo-7439754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            image_url:
              "https://images.pexels.com/photos/7534232/pexels-photo-7534232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            image_url:
              "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],
        month: "Oct",
        date: "2017-09-20",
        date_numer: "20",
        year: "2017",
        direction: "left",
        profileImage: null,
      },
      {
        title: "New people joined",
        sub_title:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ",
        images: null,
        month: "Sept",
        date: "2018-10-15",
        date_numer: "15",
        year: "2018",
        direction: "right",
        profileImage:
          "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        title: "Design meet up",
        sub_title:
          "Post subtitle 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        images: null,
        month: "Jul",
        date: "2019-10-13",
        date_numer: "13",
        year: "2019",
        direction: "left",
        profileImage:
          "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        title: "Lorem Ipsum is simply dummy",
        sub_title:
          "Subtitle 4 It is a long established fact that a reader will be distracted by the readable content of.",
        images: null,
        month: "Aug",
        date: "2020-10-18",
        date_numer: "18",
        year: "2020",
        direction: "right",
        profileImage: null,
      },
      {
        title: "Employee PhotoShot",
        sub_title:
          "Post subtitle 5, It is a long established fact that a reader will be distracted",
        images: [
          {
            image_url:
              "https://images.pexels.com/photos/7439754/pexels-photo-7439754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            image_url:
              "https://images.pexels.com/photos/7534232/pexels-photo-7534232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            image_url:
              "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],
        month: "July",
        date: "2021-10-13",
        date_numer: "13",
        year: "2021",
        direction: "left",
        profileImage: null,
      },
    ],
  },
  mutations: {
    addItem(state, newItem) {
      state.posts.push(newItem);
    },
  },
  actions: {
    async submitdata({ commit }, payload) {
      // const data = await fetchDataFromAPI();
      commit("addItem", payload);
    },
  },
  getters: {
    getPosts: (state) => state.posts,
  },
});

export default store;
