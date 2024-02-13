<script setup lang="ts">
defineProps<{ tags: { id: number; name: string }[] }>();
</script>

<template>
  <div
    class="p-5 border border-gray-300 rounded-md bg-white flex flex-col w-full items-center space-y-5"
    data-aos="fade-in"
    data-aos-duration="1000"
  >
    <h1
      class="font-bold text-red-500 text-lg pb-3 border-b-2 border-b-red-500 w-full"
    >
      - Tags
    </h1>

    <div class="flex items-center flex-wrap w-full">
      <button
        v-for="tag in tags"
        :key="tag?.id"
        type="button"
        class="bg-gray-50 px-3.5 py-2 mx-1.5 rounded-full border border-red-500 hover:text-white hover:bg-red-600 mb-3 font-bold text-xs text-red-600 flex items-center justify-between hover:scale-105 duration-150"
      >
        {{ tag?.name }}
      </button>
    </div>
  </div>
</template>
