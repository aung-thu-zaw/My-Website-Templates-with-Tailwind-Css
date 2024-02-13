<script setup lang="ts">
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { useQueryGenerator } from "~/composables/useQueryGenerator";

defineProps({ data: { type: Object } });

const route = useRoute();
const router = useRouter();
const emit = defineEmits(["updatedData"]);
const { getParameter } = useQueryGenerator();

const fetchData = async (url: string) => {
  try {
    const currentPage = getParameter(url, "page") || 1;

    const response = await axios.get(url);

    if (!response) throw new Error("Response Not Found!");

    router.push({ query: { ...route.query, page: currentPage } });

    emit("updatedData", response.data);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="flex items-center justify-center">
    <div v-if="data?.meta?.links?.length > 3">
      <div class="flex flex-wrap -mb-1">
        <template v-for="(link, p) in data?.meta?.links" :key="p">
          <div
            v-if="link.url === null"
            class="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border border-gray-400 rounded-full"
            v-html="link.label"
          />

          <div v-else class="flex items-center">
            <button
              @click="fetchData(link.url)"
              type="button"
              class="mr-1 mb-1 px-4 py-3 text-sm leading-4 border border-slate-400 rounded-full hover:text-slate-800 hover:border-slate-800 focus:border-slate-800 duration-200"
              :class="{
                'bg-slate-800 text-white hover:bg-slate-700 hover:text-white':
                  link.label == data?.meta?.current_page,
              }"
              :href="link?.url"
            >
              <span v-html="link?.label"></span>
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
