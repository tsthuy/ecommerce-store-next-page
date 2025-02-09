import { defaultApiClient } from "./custom-axios";

export const searchApi = {
  search: (query: string): Promise<ProductType[]> =>
    defaultApiClient.get(`/search/${query}`),
};
