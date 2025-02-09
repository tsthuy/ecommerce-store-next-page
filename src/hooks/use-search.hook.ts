import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "~/constants";

export function useSearch(query: string) {
  return useQuery({ ...QUERY_KEYS.search.keyword(query), enabled: !!query });
}
