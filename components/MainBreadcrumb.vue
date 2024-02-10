<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },

  targetIdentifier: {
    type: [Object],
    required: false,
  },

  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <nav class="flex mb-5 md:mb-0 overflow-x-auto w-full md:max-w-[1000px] px-0">
    <ol class="inline-flex items-center">
      <li class="inline-flex items-center text-slate-700 hover:text-red-600 duration-150">
        <NuxtLink to="/" class="inline-flex items-center text-sm font-bold">
          <svg
            class="flex-shrink-0 me-3 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          {{ label }}
        </NuxtLink>
      </li>
      <slot />
    </ol>
  </nav>
</template>
