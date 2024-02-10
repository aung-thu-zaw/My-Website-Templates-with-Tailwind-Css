<script setup lang="ts">
import FormButton from "@/components/Form/FormButton.vue";
import InputLabel from "@/components/Form/InputLabel.vue";
import InputError from "@/components/Form/InputError.vue";
import InputField from "@/components/Form/InputField.vue";
import Checkbox from "@/components/Form/Checkbox.vue";
</script>

<template>
  <div class="flex items-center justify-center py-10">
    <div
      class="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8"
    >
      <form @submit.prevent="" class="w-full space-y-5">
        <h1 class="text-center text-2xl text-slate-800 font-bold mb-6">Welcome Back</h1>

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

        <!-- Remember me and Forgot Password -->
        <div class="flex items-center justify-between mb-5">
          <div>
            <label class="flex items-center">
              <Checkbox />
              <span class="ml-2 text-sm text-slate-600"> Remember Me</span>
            </label>
          </div>

          <div>
            <a
              href="#"
              class="underline text-sm text-slate-600 font-[500] rounded-md hover:text-red-600"
            >
              Forgot Password ?
            </a>
          </div>
        </div>

        <FormButton> Login </FormButton>

        <p class="text-center text-sm">
          You don't have an account?
          <NuxtLink
            to="/sign-up"
            class="text-red-600 font-bold hover:cursor-pointer hover:underline"
          >
            Sign Up
          </NuxtLink>
        </p>
      </form>
    </div>
  </div>
</template>
