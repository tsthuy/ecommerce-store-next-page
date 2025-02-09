import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "~/constants";

export function useUserQuery(userId: string) {
  return useQuery(QUERY_KEYS.user.detail(userId));
}
