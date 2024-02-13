<script setup lang="ts">
defineProps<{
  categories: {
    id: number;
    name: string;
    slug: string;
    contents_count: number;
  }[];
}>();
</script>

<template>
  <div
    class="p-5 border border-gray-300 rounded-md bg-white flex flex-col w-full items-center space-y-5"
    data-aos="fade-in"
    data-aos-duration="1000"
  >
    <h1
      class="font-bold text-red-600 text-lg pb-3 border-b-2 border-b-red-600 w-full"
    >
      - Categories
    </h1>

    <div class="space-y-3 w-full">
      <button
        v-for="category in categories"
        :key="category?.id"
        type="button"
        class="bg-gray-50 px-5 py-3.5 round-md border border-gray-200 w-full font-semibold text-sm text-slate-700 rounded-md flex items-center justify-between hover:scale-105 duration-150"
      >
        <span class="line-clamp-1 text-left w-[180px]">
          {{ category?.name }}
        </span>
        <span class="text-red-600">
          |&nbsp;&nbsp; {{ category?.contents_count }}</span
        >
      </button>
    </div>
  </div>
</template>
