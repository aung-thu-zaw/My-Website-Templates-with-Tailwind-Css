<script setup lang="ts">
import BlogCard from "@/components/BlogCard.vue";
import { ref, onMounted } from "vue";
import { useHomeStore } from "~/stores/home";

const landmark = ref<HTMLElement | null>(null);
const items = ref<any[]>([]);
const store = useHomeStore();
const { blogs } = storeToRefs(store);

onMounted(async () => {
  await store.getLatestBlogs();
  if (typeof IntersectionObserver !== "undefined" && IntersectionObserver) {
    observer?.observe(landmark.value!);
  }
  if (blogs.value) items.value = blogs.value.data;
});

const loadMoreItem = async () => {
  if (!blogs.value?.links?.next) return;

  const data = await $fetch(blogs.value.links.next);

  if (data) items.value = [...items.value, ...data.data];

  store.$patch({ data: data });
};

let observer: IntersectionObserver | null = null;
if (typeof IntersectionObserver !== "undefined" && IntersectionObserver) {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadMoreItem();
        }
      });
    },
    {
      rootMargin: "0px 0px 150px 0px",
    }
  );
}
</script>

<template>
  <section>
    <!-- Card Blog -->
    <div class="container mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <!-- Title -->
      <div class="max-w-5xl mx-auto text-center mb-10 lg:mb-14">
        <h2
          class="text-2xl font-bold md:text-4xl md:leading-tight text-slate-800 mb-5"
        >
          Welcome to The Blog!
        </h2>
        <p class="mt-1 font-medium text-slate-600 w-full">
          Dive into a diverse range of topics covering technical skills,
          professional development, and more. Explore valuable insights to
          enhance your expertise and capabilities.
        </p>
      </div>
      <!-- End Title -->

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard v-for="blog in items" :key="blog.id" :blog="blog" />
      </div>
      <div v-if="!blogs.links?.next" class="mt-14">
        <p class="text-slate-700 text-sm font-semibold text-center">
          You have reached the end of the page.
        </p>
      </div>
    </div>

    <div ref="landmark"></div>
  </section>
</template>
