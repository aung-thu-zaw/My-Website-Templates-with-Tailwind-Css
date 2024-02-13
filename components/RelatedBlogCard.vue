<script setup lang="ts">
defineProps<{
  relatedBlogs: {
    id: number;
    title: string;
    slug: string;
    thumbnail: string;
    published_at: string;
  }[];
}>();
</script>

<template>
  <div
    v-show="relatedBlogs"
    class="p-5 border border-gray-300 rounded-md bg-white flex flex-col w-full items-center space-y-5"
  >
    <h1
      class="font-bold text-red-600 text-lg pb-3 border-b-2 border-b-red-500 w-full"
    >
      - Related Blogs
    </h1>

    <div class="space-y-3 w-full">
      <div v-for="relatedBlog in relatedBlogs" :key="relatedBlog?.id">
        <NuxtLink :to="'/blogs/' + relatedBlog?.slug">
          <div
            class="bg-gray-50 p-3 round-md border border-gray-200 w-full font-semibold text-sm text-slate-700 rounded-md flex items-start justify-between hover:scale-105 duration-150 space-x-3"
          >
            <img
              :src="relatedBlog?.thumbnail"
              :alt="relatedBlog?.thumbnail"
              class="w-16 h-16 rounded-md object-cover"
            />
            <div class="space-y-1.5">
              <h3 class="font-bold text-md line-clamp-2">
                {{ relatedBlog?.title }}
              </h3>

              <div class="text-xs font-medium space-x-1.5">
                <span class="text-red-600">
                  <i class="fa-solid fa-calendar"></i>
                </span>
                <span class="font-medium">
                  {{ relatedBlog?.published_at }}
                </span>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
