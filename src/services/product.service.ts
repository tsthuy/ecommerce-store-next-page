import { defaultApiClient } from "./custom-axios";

export const productApi = {
  getProducts: (): Promise<ProductType[]> => defaultApiClient.get("/products"),

  getRelatedProducts: (productId: string): Promise<ProductType[]> =>
    defaultApiClient.get(`/products/${productId}/related`),

  getProduct: (productId: string): Promise<ProductType> =>
    defaultApiClient.get(`/products/${productId}`),
};
