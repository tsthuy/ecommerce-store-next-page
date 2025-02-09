import { createQueryKeys } from "@lukemorales/query-key-factory";
import { userApi } from "~/services/users.service";

export const USER_KEYS = createQueryKeys("user", {
  detail: (userId: string) => ({
    queryKey: [userId],
    queryFn: () => userApi.getUser(),
  }),
});
