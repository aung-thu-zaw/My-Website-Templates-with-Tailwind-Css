// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-aos", "@pinia/nuxt"],
  plugins: ["~/plugins/preline.client.ts"],
});
