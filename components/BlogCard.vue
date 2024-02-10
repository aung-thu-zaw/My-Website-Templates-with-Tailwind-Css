<script setup>
// Your Code
</script>

<template>
  <a
    class="group flex flex-col h-full border border-slate-200 hover:border-transparent hover:shadow-lg duration-300 rounded-xl p-5 transition-all"
    href="#"
  >
    <div class="relative aspect-w-16 aspect-h-11 overflow-hidden rounded-xl">
      <img
        class="w-full object-cover rounded-xl group-hover:scale-105 duration-200"
        src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="Image Description"
      />

      <span
        class="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-slate-900 text-white py-1.5 px-3 border border-slate-400"
      >
        Sponsored
      </span>
    </div>
    <div class="my-6">
      <h3 class="text-xl font-semibold text-slate-800 line-clamp-2">
        Announcing a free plan for small teams
      </h3>
      <p class="mt-5 text-slate-600 line-clamp-3">
        At Wake, our mission has always been focused on bringing openness.
      </p>
    </div>
    <div class="mt-auto flex items-center gap-x-3">
      <img
        class="w-8 h-8 rounded-full"
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
        alt="Image Description"
      />
      <div>
        <h5 class="text-sm font-semibold text-slate-800">By Lauren Waller</h5>
        <p class="text-xs text-slate-600">September 12, 2022</p>
      </div>
    </div>
  </a>
</template>
