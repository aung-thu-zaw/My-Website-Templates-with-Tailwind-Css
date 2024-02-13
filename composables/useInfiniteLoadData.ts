// export default function useInfiniteLoadData() {}

// eg.

// export function useInfiniteScroll<T>(
//   initialPaginated: T[] = [],
//   rootMargin = "0px 0px 150px 0px"
// ) {
//   let data: Ref<T[]> = ref(initialPaginated?.data || []);
//   let nextPageUrl: string = ref(initialPaginated?.links?.next || "");
//   const newPaginatedData: Ref<T[]> = ref([]);
//   const loading: boolean = ref(false);

//   const loadMoreItems = async () => {
//     if (loading.value || !nextPageUrl) return;

//     loading.value = true;

//     const responseData = await $fetch(nextPageUrl.value);

//     if (responseData?.data?.length) {
//       data.value = [...data.value, ...responseData.data];
//       nextPageUrl = responseData.links?.next || "";
//       loading.value = false;
//       newPaginatedData.value = responseData;

//       console.log(responseData.links?.next);
//     }
//   };

//   const observeScroll = (element: HTMLElement | null) => {
//     if (!element) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && !loading.value) loadMoreItems();
//         });
//       },
//       {
//         rootMargin,
//       }
//     );

//     observer.observe(element);
//   };

//   return { data, newPaginatedData, loadMoreItems, observeScroll, loading };
// }
// this code is not working can you create for me new one.
