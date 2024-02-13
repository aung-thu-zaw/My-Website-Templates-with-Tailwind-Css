<script setup lang="ts">
const router = useRouter();

const goToBlogs = () =>
  router.push({ path: "/blogs", query: { page: 1, sort: "latest" } });
</script>

<template>
  <div
    class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-slate-50 border-b text-sm py-4"
  >
    <nav
      class="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between"
      aria-label="Global"
    >
      <NuxtLink
        to="/"
        class="sm:order-1 flex-none text-xl font-bold text-slate-700"
      >
        CMS Blog System
      </NuxtLink>
      <div class="sm:order-3 flex items-center gap-x-2">
        <button
          type="button"
          class="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-slate-50 disabled:opacity-50 disabled:pointer-events-none"
          data-hs-collapse="#navbar-alignment"
          aria-controls="navbar-alignment"
          aria-label="Toggle navigation"
        >
          <svg
            class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
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
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
          <svg
            class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        <div class="flex items-center space-x-3.5">
          <NuxtLink
            to="/sign-up"
            class="border px-5 py-3 bg-white rounded-md font-semibold text-slate-700 shadow border-slate-300"
          >
            Sign Up
          </NuxtLink>

          <NuxtLink
            to="/sign-in"
            class="border px-5 py-3 bg-slate-800 text-white rounded-md font-semibold shadow border-slate-300"
          >
            Sign In
          </NuxtLink>
        </div>
      </div>
      <div
        id="navbar-alignment"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
      >
        <div
          class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5 text-md font-bold"
        >
          <NuxtLink
            to="/"
            :class="{
              'text-red-500 hover:text-red-600':
                router.currentRoute.value.path === '/',
              'text-slate-600 hover:text-slate-800':
                router.currentRoute.value.path !== '/',
            }"
          >
            Home
          </NuxtLink>

          <button
            @click="goToBlogs"
            :class="{
              'text-red-500 hover:text-red-600':
                router.currentRoute.value.path === '/blogs' ||
                router.currentRoute.value.path.startsWith('/blogs'),

              'text-slate-600 hover:text-slate-800':
                router.currentRoute.value.path !== '/blogs' ||
                !router.currentRoute.value.path.startsWith('/blogs'),
            }"
          >
            Blogs
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<style></style>
