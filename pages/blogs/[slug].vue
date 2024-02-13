<script setup lang="ts">
import Breadcrumb from "~/components/MainBreadcrumb.vue";
import BreadcrumbItem from "~/components/BreadcrumbItem.vue";
import RelatedBlogCard from "~/components/RelatedBlogCard.vue";
import BlogCategoryCard from "~/components/BlogCategoryCard.vue";
import BlogTagCard from "~/components/BlogTagCard.vue";
import BlogCommentSection from "~/components/BlogCommentSection.vue";
import { useBlogStore } from "~/stores/blog";
import { onMounted } from "vue";

const title = ref<string>("");

useHead({ title });

const store = useBlogStore();
const { blog, relatedBlogs, categories, tags } = storeToRefs(store);

onMounted(async () => {
  await store.getBlog(useRoute()?.params?.slug);
  await store.getResources();
  title.value = blog?.value?.title;
});
</script>

<template>
  <section data-aos="fade-in" data-aos-duration="600">
    <div class="container mx-auto py-10 space-y-6">
      <div
        class="flex flex-col items-start md:flex-row md:items-center md:justify-between mb-4 md:mb-8 border-b pb-5"
      >
        <Breadcrumb label="Home">
          <BreadcrumbItem label="Blogs" />
          <BreadcrumbItem :label="blog?.name ?? ''" />
        </Breadcrumb>
      </div>

      <div class="grid grid-cols-4 gap-5">
        <div class="col-span-1 space-y-5">
          <RelatedBlogCard :relatedBlogs="relatedBlogs" />
          <BlogCategoryCard :categories="categories" />
          <BlogTagCard :tags="tags" />
        </div>

        <div class="w-full col-span-3">
          <div class="border border-slate-300 shadow-lg rounded-md p-2">
            <img
              :src="blog?.thumbnail"
              alt="blog-image"
              class="w-full max-h-[600px] object-cover"
            />
          </div>

          <h1 class="font-bold text-2xl text-slate-800 line-clamp-2 mt-8 mb-6">
            {{ blog?.title }}
          </h1>

          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center space-x-4">
              <span
                class="text-xs font-bold bg-red-600 text-white py-1 px-3 rounded-sm shadow"
              >
                {{ blog?.category?.name }}
              </span>

              <span class="font-bold text-slate-700 text-sm">
                <i class="fa-solid fa-user"></i>
                {{ blog?.author?.name }}
              </span>

              <span class="font-bold text-slate-700 text-sm">
                <i class="fa-solid fa-clock"></i>
                {{ blog?.published_at }}
              </span>
            </div>

            <!-- Share Blog Social Icons Start -->
            <div class="hidden md:flex items-center">
              <span class="font-bold text-slate-700 mr-3">
                <i class="fa-solid fa-share-nodes"></i> Share :
              </span>

              <a href="#" target="_blank">
                <i class="fa-brands fa-facebook mr-3 text-lg text-blue-600"></i>
              </a>
              <a href="#" target="_blank">
                <i class="fa-brands fa-twitter mr-3 text-lg text-sky-600"></i>
              </a>
              <a href="#" target="_blank">
                <i class="fa-brands fa-telegram mr-3 text-lg text-blue-500"></i>
              </a>
              <a href="#" target="_blank">
                <i
                  class="fa-brands fa-whatsapp mr-3 text-lg text-emerald-600"
                ></i>
              </a>
              <a href="#" target="_blank">
                <i class="fa-solid fa-link mr-3 text-sm text-slate-700"></i>
              </a>
            </div>
            <!-- Share Blog Social Icons End -->
          </div>

          <hr class="my-3" />

          <!-- Blog Description -->
          <p v-html="blog?.content" class="text-slate-800 mb-5"></p>

          <!-- Blog Tags Start -->
          <div v-show="blog?.tags?.length" class="flex items-center mb-5">
            <span class="font-bold text-slate-800 mr-3">Blog Tags :</span>
            <div class="flex items-center space-x-2">
              <button
                v-for="tag in blog?.tags"
                :key="tag.id"
                type="button"
                class="px-3 py-1 bg-red-600 rounded-full text-white text-xs capitalize font-bold hover:bg-red-700 transition-all"
              >
                {{ tag.name }}
              </button>
            </div>
          </div>
          <!-- Blog Tags End -->

          <!-- Blog Comments Section -->
          <BlogCommentSection />
        </div>
      </div>
    </div>
  </section>
</template>
