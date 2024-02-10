<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

useHead({
  titleTemplate: "%s - CMS Blog System",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Discover the power of our CMS Blog System – your ultimate platform for effortless content creation. With a sleek interface and robust features, publish, manage, and customize your blog with ease. Seamlessly responsive and equipped with SEO tools, reach your audience effectively. Unleash your creativity today.",
    },
  ],
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap",
    },
  ],
});
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
