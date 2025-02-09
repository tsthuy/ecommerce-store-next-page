import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "~/constants";
import { collectionApi } from "~/services/collection.service";

export function useCollections() {
  return useQuery({
    ...QUERY_KEYS.collection.all,
    queryFn: () => collectionApi.getCollections(),
  });
}
