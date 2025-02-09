import { createQueryKeys } from "@lukemorales/query-key-factory";
import { collectionApi } from "~/services/collection.service";

export const COLLECTION_KEYS = createQueryKeys("collection", {
  all: null,
  detail: (collectionId: string) => ({
    queryKey: [collectionId],
    queryFn: () => collectionApi.getCollection(collectionId),
  }),
});
