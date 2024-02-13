<script setup>
defineProps({ reply: Object });
</script>

<template>
  <div class="p-4 pl-16">
    <div class="flex items-start justify-between">
      <div class="flex items-start mb-2">
        <img
          :src="reply.user?.avatar"
          :alt="reply.user?.avatar"
          class="w-10 h-10 object-cover rounded-full mr-2 border border-slate-400 ring-2 ring-slate-300"
        />

        <div class="flex flex-col items-start">
          <h3 class="font-bold text-slate-700">{{ reply.user?.name }}</h3>
        </div>
      </div>

      <p class="text-slate-600 text-sm font-medium">
        {{ reply?.created_at }}
      </p>
    </div>

    <div class="pl-12">
      <p class="text-sm text-slate-700 font-medium">
        {{ reply?.comment }}
      </p>
    </div>
  </div>
</template>
