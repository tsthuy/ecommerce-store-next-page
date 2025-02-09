import { mergeQueryKeys } from "@lukemorales/query-key-factory";
import { COLLECTION_KEYS } from "./collection-key.const";

export const QUERY_KEYS = mergeQueryKeys(COLLECTION_KEYS);
