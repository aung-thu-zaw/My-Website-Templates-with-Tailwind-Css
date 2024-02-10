<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="bg-[#fff] min-h-screen font-roboto">
    <Navbar />

    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>
