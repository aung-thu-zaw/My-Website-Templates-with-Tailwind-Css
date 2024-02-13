import { defineStore } from "pinia";
import { useQueryGenerator } from "~/composables/useQueryGenerator";

interface BlogState {
  data: any;
  currentBlog: any | null;
  resources: {
    categories: any[];
    tags: any[];
  } | null;
  responseErrors: any | null;
}

export const useBlogStore = defineStore("blogs", {
  state: (): BlogState => ({
    data: [],
    currentBlog: null,
    resources: null,
    responseErrors: null,
  }),

  getters: {
    blogs: (state) => state.data,
    blog: (state) => state.currentBlog?.content,
    relatedBlogs: (state) => state.currentBlog?.relatedContents,
    categories: (state) => state.resources?.categories || [],
    tags: (state) => state.resources?.tags || [],
    errors: (state) => state.responseErrors,
  },

  actions: {
    async getBlogs(params) {
      try {
        const { generateQueryParams } = useQueryGenerator();

        const data = await $fetch(
          `http://localhost:8000/api/contents?${generateQueryParams({
            ...params,
          })}`
        );

        if (!data) throw new Error("Response Data Not Found!");

        this.data = data;
      } catch (error) {
        this.responseErrors = error.response?.data?.errors;
      }
    },

    async getBlog(slug: string | string[]) {
      try {
        const data = await $fetch(`http://localhost:8000/api/contents/${slug}`);

        if (!data) throw new Error("Response Data Not Found!");

        this.currentBlog = data;
      } catch (error) {
        this.responseErrors = error.response?.data?.errors;
      }
    },

    async getResources() {
      try {
        const data = await $fetch(`http://localhost:8000/api/blog/resources`);

        if (!data) throw new Error("Response Data Not Found!");

        this.resources = data;
      } catch (error) {
        this.responseErrors = error.response?.data?.errors;
      }
    },
  },
});
