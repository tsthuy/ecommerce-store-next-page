import { defaultApiClient } from "./custom-axios";

export const productApi = {
  getProducts: (): Promise<ProductType[]> => defaultApiClient.get("/products"),

  getProduct: (productId: string): Promise<ProductType> =>
    defaultApiClient.get(`/products/${productId}`),
};
