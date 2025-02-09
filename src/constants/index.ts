import { mergeQueryKeys } from "@lukemorales/query-key-factory";
import { COLLECTION_KEYS } from "./collection-key.const";
import { USER_KEYS } from "./user-key.const";
import { PRODUCT_KEY } from "./product-key.const";
import { SEARCH_KEY } from "./search-key.const";

export const QUERY_KEYS = mergeQueryKeys(
  COLLECTION_KEYS,
  USER_KEYS,
  PRODUCT_KEY,
  SEARCH_KEY
);
