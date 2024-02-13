<script setup lang="ts">
import Breadcrumb from "~/components/MainBreadcrumb.vue";
import BreadcrumbItem from "~/components/BreadcrumbItem.vue";
import BlogSearchBox from "~/components/BlogSearchBox.vue";
import BlogSortBy from "~/components/BlogSortBy.vue";
import BlogCard from "~/components/BlogCard.vue";
import BlogCategoryCard from "~/components/BlogCategoryCard.vue";
import BlogTagCard from "~/components/BlogTagCard.vue";
import Pagination from "~/components/Pagination.vue";
import { useBlogStore } from "~/stores/blog";
import { useQueryStringParams } from "@/composables/useQueryStringParams";
import { onMounted } from "vue";

useHead({ title: "Blogs" });

const store = useBlogStore();
const { blogParams } = useQueryStringParams();
const { blogs, categories, tags } = storeToRefs(store);

onMounted(async () => {
  await store.getBlogs(blogParams.value);
  await store.getResources();
});

const handleUpdatedData = (data: any) => store.$patch({ data: data });
</script>

<template>
  <section data-aos="fade-in" data-aos-duration="600">
    <div class="container mx-auto py-10">
      <div
        class="flex flex-col items-start md:flex-row md:items-center md:justify-between mb-4 md:mb-8 border-b pb-5"
      >
        <Breadcrumb label="Home">
          <BreadcrumbItem label="Blogs" />
        </Breadcrumb>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div class="col-span-1 space-y-5">
          <BlogCategoryCard :categories="categories" />
          <BlogTagCard :tags="tags" />
        </div>

        <div class="space-y-5 col-span-3">
          <div class="flex w-full space-x-10">
            <BlogSearchBox />

            <BlogSortBy />
          </div>

          <div v-if="blogs.data?.length">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              <BlogCard
                v-for="blog in blogs.data"
                :key="blog.id"
                :blog="blog"
              />
            </div>

            <div class="my-10 flex items-center justify-center">
              <Pagination :data="blogs" @updatedData="handleUpdatedData" />
            </div>
          </div>
          <div v-else class="py-32">
            <p class="text-center font-bold text-xl text-red-600">
              <i class="fa-solid fa-magnifying-glass"></i>
              No Blog Found!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
