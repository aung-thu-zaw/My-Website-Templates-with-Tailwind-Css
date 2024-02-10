<script setup>
defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
  <li class="text-slate-700">
    <div class="flex items-center">
      <svg class="flex-shrink-0 ml-3 overflow-visible h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>

      <div class="ml-1 text-sm font-semibold text-blueGray-600 hover:text-blueGray-700 md:ml-2">
        {{ label }}
      </div>
    </div>
  </li>
</template>
