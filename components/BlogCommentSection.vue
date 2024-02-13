<script setup lang="ts">
import BlogCommentForm from "@/components/BlogCommentForm.vue";
import BlogCommentCard from "@/components/BlogCommentCard.vue";
import BlogReplyCard from "~/components/BlogReplyCard.vue";

defineProps({ blog: Object, comments: Object });
</script>

<template>
  <section>
    <div class="border border-gray-300 bg-white rounded-sm shadow">
      <div class="border-b p-5">
        <p class="text-md font-semibold text-slate-700 mb-5">
          Total Comments ({{ comments?.total }})
        </p>

        <div v-if="comments?.data?.length" class="space-y-5">
          <div v-for="comment in comments?.data" :key="comment.id">
            <div class="py-3 rounded-md border border-gray-300">
              <!-- Comment Card -->
              <!-- v-show="!blog?.reply_to_comment_id" -->
              <BlogCommentCard :blog="blog" :comment="comment" />

              <!-- Reply Card -->
              <BlogReplyCard
                v-show="comment?.replies?.length"
                v-for="reply in comment?.replies"
                :reply="reply"
              />
            </div>
          </div>
        </div>

        <div v-else class="pt-16 pb-20">
          <p class="text-center font-bold text-slate-700 text-md">
            <i class="fa-solid fa-comment-slash"></i>
            Comments Not Yet
          </p>
        </div>
      </div>

      <!-- Comment Form -->
      <div v-if="blog?.is_allowed_comment">
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
