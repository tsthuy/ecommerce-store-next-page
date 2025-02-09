import { createQueryKeys } from "@lukemorales/query-key-factory";
import { searchApi } from "~/services/search.service";

export const SEARCH_KEY = createQueryKeys("search", {
  keyword: (keyword: string) => ({
    queryKey: [keyword],
    queryFn: () => searchApi.search(keyword),
  }),
});
