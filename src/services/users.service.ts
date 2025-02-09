import { storeApiClient } from "./custom-axios";

export const userApi = {
  getUser: (): Promise<UserType> => storeApiClient.get("/users"),
};
