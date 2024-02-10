<script setup>
import BlogCommentForm from "@/components/BlogCommentForm.vue";
</script>

<template>
  <section>
    <div class="border border-gray-300 bg-white rounded-sm shadow">
      <div class="border-b p-5">
        <p class="text-md font-semibold text-slate-700 mb-5">Total Comments (10)</p>

        <div class="py-5">
          <p class="text-center font-bold text-slate-700 text-md">
            <i class="fa-solid fa-comment-slash"></i>
            Comments Not Yet
          </p>
        </div>
      </div>

      <!-- Comment Form -->
      <div>
        <BlogCommentForm />
      </div>
      <!-- <div  class="py-5">
        <p class="text-center text-sm font-medium text-slate-600">
          If you want to write comments you need to login first. Here
          <NuxtLink to="/sign-in" class="font-bold text-red-600 hover:underline">
            Sign In
          </NuxtLink>
          Or
          <NuxtLink to="sign-up" class="font-bold text-red-600 hover:underline">
            Sign Up
          </NuxtLink>
        </p>
      </div> -->
    </div>
  </section>
</template>
