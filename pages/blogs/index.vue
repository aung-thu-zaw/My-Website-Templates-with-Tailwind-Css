<script setup>
import Breadcrumb from "~/components/MainBreadcrumb.vue";
import BreadcrumbItem from "~/components/BreadcrumbItem.vue";
import BlogSearchBox from "~/components/BlogSearchBox.vue";
import BlogSortBy from "~/components/BlogSortBy.vue";
import BlogCard from "~/components/BlogCard.vue";
import BlogCategoryCard from "~/components/BlogCategoryCard.vue";
import BlogTagCard from "~/components/BlogTagCard.vue";
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
          <BlogCategoryCard />
          <BlogTagCard />
        </div>

        <div class="space-y-5 col-span-3">
          <div class="flex w-full space-x-10">
            <BlogSearchBox />

            <BlogSortBy />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
