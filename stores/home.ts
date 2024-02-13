import { defineStore } from "pinia";

interface BlogState {
  data: any;
  responseErrors: any | null;
}

export const useHomeStore = defineStore("home", {
  state: (): BlogState => ({
    data: [],
    responseErrors: null,
  }),

  getters: {
    blogs: (state) => state.data,
    errors: (state) => state.responseErrors,
  },

  actions: {
    async getLatestBlogs() {
      try {
        const data = await $fetch(`http://localhost:8000/api/home/resources`);

        if (!data) throw new Error("Response Data Not Found!");

        this.data = data;
      } catch (error) {
        this.responseErrors = error.response?.data?.errors;
      }
    },
  },
});
