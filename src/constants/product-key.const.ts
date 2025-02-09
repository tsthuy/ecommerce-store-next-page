import { createQueryKeys } from "@lukemorales/query-key-factory";
import { productApi } from "~/services/product.service";

export const PRODUCT_KEY = createQueryKeys("product", {
  all: null,

  detail: (productId: string) => ({
    queryKey: [productId],
    queryFn: () => productApi.getProduct(productId),
  }),

  related: (productId: string) => ({
    queryKey: [productId],
    queryFn: () => productApi.getRelatedProducts(productId),
  }),
});
