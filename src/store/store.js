// store/store.js

import { createStore } from "vuex";

const store = createStore({
  state: {
    posts: [
      {
        title: "Post Title 1",
        sub_title: "Post subtitle 1",
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
        date: "01",
        year: "2020",
        direction: "left",
      },
      {
        title: "Post Title 2",
        sub_title:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ",
        images: null,
        month: "Sept",
        date: "16",
        year: "2020",
        direction: "right",
      },
      {
        title: "Post Title 3",
        sub_title:
          "Post subtitle 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        images: null,
        month: "Sept",
        date: "20",
        year: "2020",
        direction: "left",
      },
      {
        title: "Post Title 4 Lorem Ipsum is simply dummy",
        sub_title: "Post subtitle 4 ",
        images: null,
        month: "Aug",
        date: "22",
        year: "2020",
        direction: "right",
      },
      {
        title: "Post Title 5",
        sub_title: "Post subtitle 5",
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
        date: "25",
        year: "2020",
        direction: "left",
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
      // Simulate an API call
      // const data = await fetchDataFromAPI();
      commit("addItem", payload);
    },
  },
  getters: {
    getPosts: (state) => state.posts,
  },
});

export default store;
