<script setup>
import TextAreaField from "@/components/Form/TextAreaField.vue";
import InputError from "@/components/Form/InputError.vue";
import FormButton from "@/components/Form/FormButton.vue";
</script>

<template>
  <div class="p-5">
    <form @submit.prevent="">
      <div class="mb-3">
        <TextAreaField name="comment-blog" placeholder="Enter comment" required />

        <!-- <InputError :message="" /> -->
      </div>

      <div class="w-[150px] ml-auto">
        <FormButton>
          <i class="fa-solid fa-paper-plane"></i>
          Submit
        </FormButton>
      </div>
    </form>
  </div>
</template>
