// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-aos", "@pinia/nuxt"],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  plugins: ["~/plugins/preline.client.ts"],
});
