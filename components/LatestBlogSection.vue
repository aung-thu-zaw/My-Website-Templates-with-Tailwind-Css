<script setup lang="ts">
import BlogCard from "@/components/BlogCard.vue";
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
        <BlogCard />
      </div>
    </div>
  </section>
</template>
