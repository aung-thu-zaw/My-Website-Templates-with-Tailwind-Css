import { useRoute } from "vue-router";
import { computed } from "vue";

type QueryParam = string | undefined;

interface BlogQueryParams {
  search?: QueryParam;
  page?: number;
  sort?: QueryParam;
  category?: QueryParam;
  tag?: QueryParam;
}

export function useQueryStringParams() {
  const route = useRoute();

  const blogParams = computed<BlogQueryParams>(() => ({
    search: route.query.search as QueryParam,
    page: parseInt(route.query.page as string) || 1,
    sort: (route.query.sort as QueryParam) || "latest",
    category: route.query.category as QueryParam,
    tag: route.query.tag as QueryParam,
  }));

  return {
    blogParams,
  };
}
