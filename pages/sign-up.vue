<script setup lang="ts">
import FormButton from "@/components/Form/FormButton.vue";
import InputLabel from "@/components/Form/InputLabel.vue";
import InputError from "@/components/Form/InputError.vue";
import InputField from "@/components/Form/InputField.vue";

useHead({ title: "Sign Up" });
</script>

<template>
  <div class="flex items-center justify-center py-10" data-aos="fade-in" data-aos-duration="1000">
    <div
      class="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8"
    >
      <form @submit.prevent="" class="w-full space-y-5">
        <h1 class="text-center text-2xl text-slate-800 font-bold mb-6">
          Create A New Blog Account
        </h1>

        <!-- Name Input -->
        <div>
          <InputLabel label="Full Name" required />

          <InputField
            type="text"
            name="your-name"
            placeholder="Enter Your Full Name"
            required
            rounded
          />

          <!-- <InputError message="" /> -->
        </div>

        <!-- Email Input -->
        <div>
          <InputLabel label="Email Address" required />

          <InputField
            type="email"
            name="your-email"
            placeholder="Enter Email Address"
            required
            rounded
          />

          <!-- <InputError message="" /> -->
        </div>

        <!-- Password Input -->
        <div>
          <InputLabel label="Password" required />

          <InputField
            type="password"
            name="your-password"
            placeholder="Enter Password"
            rounded
            required
          />

          <!-- <InputError message="" /> -->
        </div>

        <!-- Confirm Password Input -->
        <div>
          <InputLabel label="Confirm Password" required />

          <InputField
            type="password"
            name="your-confirm-password"
            placeholder="Enter Password"
            rounded
            required
          />
        </div>

        <FormButton> Sign Up </FormButton>

        <p class="text-center text-sm">
          Already have an account?
          <NuxtLink
            to="/sign-in"
            class="text-red-600 font-bold hover:cursor-pointer hover:underline"
          >
            Sign In
          </NuxtLink>
        </p>
      </form>
    </div>
  </div>
</template>
