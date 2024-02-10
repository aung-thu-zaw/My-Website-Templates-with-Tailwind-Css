<script setup></script>

<template>
  <div class="w-full">
    <form>
      <label for="default-search" class="mb-2 text-sm font-medium text-slate-900 sr-only"
        >Search</label
      >
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
          <svg
            class="w-4 h-4 text-slate-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full p-5 pl-10 text-sm font-semibold focus:outline-none text-slate-800 border border-slate-300 rounded-full bg-slate-50 focus:ring-slate-300 focus:border-slate-300"
          placeholder="Search blogs..."
          required
        />
        <button
          type="submit"
          class="text-white absolute right-2.5 bottom-[9px] bg-slate-600 hover:bg-slate-700 focus:ring-2 focus:border-slate-500 focus:outline-none focus:ring-slate-300 font-medium rounded-full text-sm px-5 py-3"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</template>
