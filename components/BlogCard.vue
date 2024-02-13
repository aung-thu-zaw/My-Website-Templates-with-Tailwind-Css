<script setup lang="ts">
interface Blog {
  id: number;
  category_id: number;
  author_id: number;
  title: string;
  slug: string;
  thumbnail: string;
  content: string;
  published_at: string;
  author: {
    name: string;
    avatar: string;
  };
  category: {
    name: string;
    slug: string;
  };
}

const props = defineProps<{ blog: Blog }>();
</script>

<template>
  <div
    class="group flex flex-col h-full border border-slate-200 hover:border-transparent hover:shadow-lg duration-300 rounded-xl p-5 transition-all"
  >
    <div class="relative aspect-w-16 aspect-h-11 overflow-hidden rounded-xl">
      <img
        class="w-full object-cover rounded-xl group-hover:scale-105 duration-200"
        :src="blog?.thumbnail"
        :alt="blog?.thumbnail"
      />

      <span
        class="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-slate-900 text-white py-1.5 px-3 border border-slate-400"
      >
        {{ blog?.category?.name }}
      </span>
    </div>
    <div class="my-6">
      <NuxtLink :to="'/blogs/' + blog?.slug">
        <h3 class="text-xl font-semibold text-slate-800 line-clamp-2">
          {{ blog?.title }}
        </h3>
      </NuxtLink>
      <p class="mt-5 text-slate-600 line-clamp-3">
        {{ blog?.content }}
      </p>
    </div>
    <div class="mt-auto flex items-center gap-x-3">
      <img
        class="w-8 h-8 rounded-full"
        :src="blog?.author?.avatar"
        alt="Author Avatar"
      />
      <div>
        <h5 class="text-sm font-semibold text-slate-800">
          By {{ blog?.author?.name }}
        </h5>
        <p class="text-xs text-slate-600">{{ blog?.published_at }}</p>
      </div>
    </div>
  </div>
</template>
